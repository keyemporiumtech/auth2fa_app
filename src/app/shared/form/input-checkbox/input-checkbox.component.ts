import { Component, Input } from '@angular/core';
import { ApplicationLoggerService } from '@ddc/kit';
import { InputSelectComponent } from '../input-select/input-select.component';

@Component({
	selector: 'ddc-app-input-checkbox',
	templateUrl: './input-checkbox.component.html',
	styleUrls: ['./input-checkbox.component.scss'],
})
export class InputCheckboxComponent extends InputSelectComponent {
	@Input() isHorizontal: boolean;

	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
		this.bindCheckedSubscription = true;
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
	}
	ngOnDestroyForChildren() {
		super.ngOnDestroyForChildren();
	}
	getClassName(): string {
		return 'InputCheckboxComponent';
	}

	setAutomaticValidations() {}
	setPropertiesFromField() {
		this.isHorizontal = this.field.property.isHorizontal;
	}
}
