import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {
	ApplicationLoggerService,
	OptionListModel,
	StringTranslate,
	TranslateUtility,
} from '@ddc/kit';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { template } from '../../../../environments/template/template';
import { KiAutocompleteComponent } from '@ddc/kit-ionic';
import { BaseInputComponent } from '../base-input.component';
import { RequestUtility } from '@ddc/rest';

@Component({
	selector: 'ddc-app-input-autocomplete',
	templateUrl: './input-autocomplete.component.html',
	styleUrls: ['./input-autocomplete.component.scss'],
})
export class InputAutocompleteComponent extends BaseInputComponent {
	@ViewChild('autocomplete') autocomplete: KiAutocompleteComponent;
	@Input() textNoRecords: string | StringTranslate;
	@Input() digits: number;
	@Input() debounce: number = 1000;
	@Input() list: OptionListModel[];
	@Output() searchEmit = new EventEmitter<string>(); // evento che scatta quando viene avviata la ricerca (emette il parametro di ricerca)
	@Output() selectEmit = new EventEmitter<OptionListModel>(); // evento che scatta al click di un item (emette l'item)
	@Output() overEmit = new EventEmitter<OptionListModel>(); // evento che scatta quando si passa con il mouse sopra l'item (emette l'item)
	@Output() outEmit = new EventEmitter<OptionListModel>(); // evento che scatta quando il mouse lascia un item (emette l'item)
	// functions
	@Input() search: (term: string) => Observable<OptionListModel[]>;
	subSearch: Subscription;
	// flags
	loadingResults: boolean;

	constructor(
		applicationLogger: ApplicationLoggerService,
		private translateService: TranslateService,
	) {
		super(applicationLogger);
		this.list = [];
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
		this.manageInfo();
		this.manageMessages();
		this.subStatus = this.field.formControl.statusChanges
			.pipe(distinctUntilChanged())
			.subscribe((status) => {
				if (status === 'DISABLED') {
					this.autocomplete.form.get('text').disable();
				} else {
					this.autocomplete.form.get('text').enable();
				}
			});
		this.subInput = this.field.formControl.valueChanges
			.pipe(distinctUntilChanged((a, b) => a && b && (a.key === b.key || a === b)))
			.subscribe((value) => {
				let removeList: boolean;
				let optionSelected: OptionListModel;
				let valueText: string = '';
				if (typeof value === 'string') {
					optionSelected = this.list.find(
						(el) => TranslateUtility.get(el.text, this.translateService) === value,
					);
					valueText = value;
					if (!optionSelected) {
						this.quitReplace(undefined);
					}
				} else if (value instanceof OptionListModel) {
					optionSelected = value;
					removeList = true;
				}
				const valAutocomplete = optionSelected
					? TranslateUtility.get(optionSelected.text, this.translateService)
					: valueText;
				this.autocomplete.form.get('text').setValue(valAutocomplete);
				if (removeList) {
					setTimeout(() => {
						this.autocomplete.list.length = 0;
						this.autocomplete.showNoResult = false;
					}, 0);
				}
				this.manageMessages();
			});
	}
	ngAfterViewInitForChildren() {
		super.ngAfterViewInitForChildren();
	}
	ngOnDestroyForChildren() {
		super.ngOnDestroyForChildren();
		if (this.subSearch) {
			this.subSearch.unsubscribe();
		}
	}
	getClassName(): string {
		return 'InputAutocompleteComponent';
	}

	evalInputStyles() {
		super.evalInputStyles();
		if (!this.iconClass) {
			this.iconClass = template.icons.iconSearch;
		}
		if (!this.field.cssStyle) {
			this.field.cssStyle = {};
		}
		// this.field.cssStyle['width'] = '95vw';
		this.field.cssStyle['margin-top'] = '1.5rem';
	}
	onSearch(term: string) {
		this.searchEmit.emit(term);

		if (this.search) {
			this.loadingResults = true;
			this.subSearch = RequestUtility.debounceAsyncByValue(
				term,
				this.debounce,
				this.search(term),
			).subscribe(
				(list) => {
					this.list = list;
					this.loadingResults = false;
				},
				(err) => {
					this.loadingResults = false;
				},
			);
		}
	}
	onSelect(item: OptionListModel) {
		this.selectEmit.emit(item);
		this.field.formControl.setValue(item);
	}
	onOver(item: OptionListModel) {
		this.overEmit.emit(item);
	}
	onOut(item: OptionListModel) {
		this.outEmit.emit(item);
	}

	onReset() {
		this.quitReplace(undefined);
		this.manageMessages();
	}

	setAutomaticValidations() {}
	setPropertiesFromField() {
		this.textNoRecords = this.field.property.textNoRecords;
		this.list = this.field.property.list;
		this.search = this.field.property.search;
	}
}
