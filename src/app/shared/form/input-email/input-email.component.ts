import { Component } from '@angular/core';
import { ApplicationLoggerService, CustomValidators, CustomValidatorsMessages } from '@ddc/kit';
import { BaseInputIonicComponent } from '../base-input-ionic.component';

@Component({
	selector: 'ddc-app-input-email',
	templateUrl: './input-email.component.html',
	styleUrls: ['./input-email.component.scss'],
})
export class InputEmailComponent extends BaseInputIonicComponent {
	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
	}
	ngAfterViewInitForChildren() {
		super.ngAfterViewInitForChildren();
	}
	ngOnDestroyForChildren() {
		super.ngOnDestroyForChildren();
	}
	getClassName(): string {
		return 'InputEmailComponent';
	}

	setAutomaticValidations() {
		this.addOtherValidation(CustomValidators.isValidEmail);
		this.field.validations.push(CustomValidatorsMessages.IS_VALID_EMAIL());
		this.inAutomatic = true;
	}

	setPropertiesFromField() {}
}
