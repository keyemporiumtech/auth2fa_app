import { Component } from '@angular/core';
import { ApplicationLoggerService } from '@ddc/kit';
import { BaseInputIonicComponent } from '../base-input-ionic.component';

@Component({
	selector: 'ddc-app-input-color',
	templateUrl: './input-color.component.html',
	styleUrls: ['./input-color.component.scss'],
})
export class InputColorComponent extends BaseInputIonicComponent {
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
		return 'InputColorComponent';
	}

	setPropertiesFromField() {}
	setAutomaticValidations() {}
}
