import { Component, Input } from '@angular/core';
import { ApplicationLoggerService, BaseComponent, StringTranslate } from '@ddc/kit';
import { template } from '../../../../environments/template/template';
import { FormInputValidationStyleInterface } from '../../interfaces/form/form-input-validation-style.interface';

@Component({
	selector: 'ddc-app-input-messages',
	templateUrl: './input-messages.component.html',
	styleUrls: ['./input-messages.component.scss'],
})
export class InputMessagesComponent extends BaseComponent {
	@Input() supportMessages: (string | StringTranslate)[];
	@Input() errorMessages: (string | StringTranslate)[];
	@Input() validMessages: (string | StringTranslate)[];
	@Input() styleMessages: FormInputValidationStyleInterface[];
	iconSupport: string;
	iconError: string;
	iconValid: string;

	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
		this.iconSupport = template.icons.iconInfo;
		this.iconError = template.icons.iconInvalid;
		this.iconValid = template.icons.iconValid;
	}

	ngOnInitForChildren() {}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {}
	getClassName(): string {
		return 'InputMessagesComponent';
	}
}
