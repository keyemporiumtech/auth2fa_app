import { Component, Input } from '@angular/core';
import { ApplicationLoggerService, OptionListModel, StringTranslate } from '@ddc/kit';
import { BaseInputIonicComponent } from '../base-input-ionic.component';

@Component({
	selector: 'ddc-app-input-radio',
	templateUrl: './input-radio.component.html',
	styleUrls: ['./input-radio.component.scss'],
})
export class InputRadioComponent extends BaseInputIonicComponent {
	@Input() options: OptionListModel[];
	@Input() isHorizontal: boolean;
	get selectedOption(): OptionListModel {
		if (this.field && this.field.formControl) {
			return this.options && this.options.find((el) => el.key === this.field.formControl.value);
		}
		return undefined;
	}

	@Input() headerText: string | StringTranslate;
	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
		this.options = [];
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
	}
	ngOnDestroyForChildren() {
		super.ngOnDestroyForChildren();
	}
	getClassName(): string {
		return 'InputRadioComponent';
	}
	setAutomaticValidations() {}
	setPropertiesFromField() {
		this.isHorizontal = this.field.property.isHorizontal;
	}

	selectItem(option: OptionListModel) {
		setTimeout(() => {
			if (this.field && this.field.formControl.enabled) {
				if (this.field.formControl.value !== option.key) {
					this.field.formControl.setValue(option.key);
				} else {
					this.field.formControl.setValue(undefined);
				}
			}
		}, 0);
	}
}
