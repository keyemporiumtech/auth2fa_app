import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
	BaseAutocompleteComponent,
	StringTranslate,
	ApplicationLoggerService,
	OptionListModel,
} from '@ddc/kit';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { component } from '../../../../../environments/template/component';
@Component({
	selector: 'ddc-app-ki-autocomplete',
	templateUrl: './ki-autocomplete.component.html',
	styleUrls: ['./ki-autocomplete.component.scss'],
})
export class KiAutocompleteComponent extends BaseAutocompleteComponent {
	// inherit
	@Output() searchEmit = new EventEmitter<string>(); // evento che scatta quando viene avviata la ricerca (emette il parametro di ricerca)
	@Output() selectEmit = new EventEmitter<OptionListModel>(); // evento che scatta al click di un item (emette l'item)
	@Output() overEmit = new EventEmitter<OptionListModel>(); // evento che scatta quando si passa con il mouse sopra l'item (emette l'item)
	@Output() outEmit = new EventEmitter<OptionListModel>(); // evento che scatta quando il mouse lascia un item (emette l'item)
	// input

	// proper
	@Input() placeholder: string | StringTranslate;
	@Input() textNotFound: string | StringTranslate;
	@Input() inputClass: any;
	@Input() inputStyle: any;
	@Input() infoClass: any;
	@Input() infoStyle: any;
	@Input() icon: any;
	@Input() iconColor: string;
	subValue: Subscription;
	// control
	form: FormGroup;

	// ionic
	@Output() cancelEmit = new EventEmitter<boolean>();
	@Output() clearEmit = new EventEmitter<boolean>();

	constructor(applicationLogger: ApplicationLoggerService, private fb: FormBuilder) {
		super(applicationLogger);
		this.form = this.fb.group({
			text: [''],
		});
	}

	getTextNotFoundResults(): string | StringTranslate {
		return this.textNotFound ? this.textNotFound : 'MESSAGE.NO_RECORDS';
	}
	ngOnInitForChildren() {
		if (!this.maxDigit) {
			this.maxDigit = component.autocomplete.maxDigit;
		}
		if (!this.list) {
			this.list = [];
		}
		this.subValue = this.form
			.get('text')
			.valueChanges.pipe(distinctUntilChanged())
			.subscribe((value) => {
				super.onKeyUp(value);
			});
	}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {
		if (this.subValue) {
			this.subValue.unsubscribe();
		}
	}
	getClassName(): string {
		return 'KiAutocompleteComponent';
	}

	onClear() {
		this.clearEmit.emit(true);
	}

	onCancel() {
		this.cancelEmit.emit(true);
	}
}
