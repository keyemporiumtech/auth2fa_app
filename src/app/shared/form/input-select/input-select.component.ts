import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationLoggerService, OptionListModel } from '@ddc/kit';
import { BaseInputIonicComponent } from '../base-input-ionic.component';

@Component({
	selector: 'ddc-app-input-select',
	templateUrl: './input-select.component.html',
	styleUrls: ['./input-select.component.scss'],
})
export class InputSelectComponent extends BaseInputIonicComponent {
	@Input() options: OptionListModel[];
	@Input() defaultOption: OptionListModel;
	@Input() defaultOptionText: string;
	@Input() changeIfEnable: boolean = true;
	selectedOption: OptionListModel;
	// multiple
	@Input() multiple: boolean;
	@Input() maxSelectedView: number;
	selectedOptions: OptionListModel[];
	// checked
	bindCheckedSubscription: boolean;
	checkedMap: Map<number, boolean>;
	// changes
	@Output() selectchanged: EventEmitter<any> = new EventEmitter<any>();

	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
		this.options = [];
		this.checkedMap = new Map<number, boolean>();
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
		if (!this.defaultOptionText) {
			this.defaultOptionText = '---';
		}
		if (!this.defaultOption) {
			this.defaultOption = new OptionListModel(undefined, this.defaultOptionText);
		}
		this.selectedOption = this.defaultOption;

		this.buildCheckedMap();
		/*
		this.subValues = this.field.formControl.valueChanges.subscribe((values) => {
			if (values) {
				if (values.length === 1 && values[0] === '') {
					this.field.formControl.setValue(undefined);
				} else if (this.multiple) {
					this.selectedOptions = this.options.filter((el) => values.includes(el.key)) || [];
				} else {
					this.selectedOption = this.options.find((el) => el.key === values[0]);
				}
			} else {
				this.selectedOptions = undefined;
				this.selectedOption = this.defaultOption;
			}
		});
		*/
	}
	behaviourOnCheckedSubscribe(value: any) {
		let checked: OptionListModel[] = [];
		let notChecked: OptionListModel[] = [];
		if (!value) {
			checked = [];
			notChecked = this.options;
		} else if (this.multiple) {
			checked = this.options.filter((el) => value.includes(el.key)) || [];
			notChecked = this.options.filter((el) => !value.includes(el.key)) || [];
		} else {
			checked = [this.options.find((el) => el.key === value)];
			notChecked = [this.options.find((el) => el.key !== value)];
		}
		if (checked && checked.length) {
			checked.forEach((el) => {
				if (el) {
					this.setCheckedOption(el, true);
				}
			});
		}
		if (notChecked && notChecked.length) {
			notChecked.forEach((el) => {
				if (el) {
					this.setCheckedOption(el, false);
				}
			});
		}
	}
	behaviourOnSubscribe(value: any) {
		if (this.bindCheckedSubscription) {
			this.behaviourOnCheckedSubscribe(value);
		}
		this.manageMessages();
	}
	ngAfterViewInitForChildren() {
		super.ngAfterViewInitForChildren();
	}
	ngOnDestroyForChildren() {
		super.ngOnDestroyForChildren();
	}
	getClassName(): string {
		return 'FormSelectComponent';
	}

	onReset() {
		this.quitReplace(undefined);
		this.manageMessages();
	}
	manageSelected(value: any) {
		this.selectchanged.emit(value);
	}

	setAutomaticValidations() {}
	setPropertiesFromField() {
		this.options = this.field.property.options;
		this.defaultOption = this.field.property.defaultOption;
		this.defaultOptionText = this.field.property.defaultOptionText;
		this.multiple = this.field.property.multiple;
		this.maxSelectedView = this.field.property.maxSelectedView;
		this.changeIfEnable = this.field.property.changeIfEnable;
	}

	// checked
	buildCheckedMap() {
		for (let i = 0; i < this.options.length; i++) {
			this.checkedMap.set(i, this.isSelected(this.options[i]));
		}
	}
	setCheckedOption(option: OptionListModel, value: boolean) {
		setTimeout(() => {
			const index = this.options.findIndex((el) => el.key === option.key);
			if (index !== -1) {
				this.checkedMap.set(index, value);
			}
		}, 0);
	}

	// commons
	isSelected(option: OptionListModel): boolean {
		if (this.multiple && this.field && this.field.formControl && this.field.formControl.value) {
			return this.field.formControl.value.includes(option.key);
		} else if (this.field && this.field.formControl) {
			return this.field.formControl.value === option.key;
		} else {
			return false;
		}
	}

	selectItem(option: OptionListModel) {
		if (this.multiple) {
			this.checkOptionForMultiple(option);
		} else {
			this.checkOptionForSingle(option);
		}
	}

	setOnlySelectedOption(option: OptionListModel) {
		if (this.multiple) {
			this.setOnlySelectedOptionForMultiple(option);
		} else {
			this.setOnlySelectedOptionForSingle(option);
		}
	}

	// single
	setOnlySelectedOptionForSingle(option: OptionListModel) {
		const selected = this.options.find((el) => el.key === option.key);
		if (selected) {
			this.selectedOption = option;
			this.selectedOptions = [option];
		}
	}

	/**
	 * Setta il valore al control secondo l'item option selezionato
	 * @param option item selezionato o deselezionato
	 * @param optionsEvent per gestire gli eventi sul control
	 */
	checkOptionForSingle(option: OptionListModel, optionsEvent?: any) {
		if (this.field && this.evalIfEnable()) {
			if (this.isSelected(option)) {
				this.field.formControl.setValue(undefined, optionsEvent);
				this.selectedOption = undefined;
				this.selectedOptions = [];
			} else if (this.field.formControl.value !== option.key) {
				this.field.formControl.setValue(option.key);
				this.selectedOption = option;
				this.selectedOptions = [option];
			}
		}
	}

	// multiple
	setOnlySelectedOptionForMultiple(option: OptionListModel) {
		const selected = this.options.find((el) => el.key === option.key);
		if (selected) {
			this.selectedOption = this.defaultOption;
			if (this.selectedOptions && this.selectedOptions.length) {
				const index = this.selectedOptions.findIndex((el) => el.key === option.key);
				if (index === -1) {
					this.selectedOptions.push(option);
				}
			} else {
				this.selectedOptions = [option];
			}
		}
	}

	/**
	 * Aggiunge o toglie un item alla lista selectedOptions e
	 * Setta il valore al control secondo gli items selectedOptions
	 * @param option item selezionato
	 */
	checkOptionForMultiple(option: OptionListModel) {
		if (this.field && this.evalIfEnable()) {
			const val = this.field.formControl.value;
			const values = val ? (val instanceof Array ? val : [val]) : [];
			const index = values.findIndex((el) => el === option.key);
			if (index === -1) {
				values.push(option.key);
			} else {
				values.splice(index, 1);
			}
			this.field.formControl.setValue(values && values.length ? values : undefined);
			this.selectedOption = this.defaultOption;
			this.selectedOptions = this.options.filter((el) => values.includes(el.key));
		}
	}

	private evalIfEnable(): boolean {
		if (this.changeIfEnable) {
			return this.field.formControl.enabled;
		}
		return true;
	}
}
