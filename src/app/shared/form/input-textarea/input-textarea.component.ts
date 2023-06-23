import { Component, Input } from '@angular/core';
import { ApplicationLoggerService } from '@ddc/kit';
import { component } from '../../../../environments/template/component';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
	selector: 'ddc-app-input-textarea',
	templateUrl: './input-textarea.component.html',
	styleUrls: ['./input-textarea.component.scss'],
})
export class InputTextareaComponent extends InputTextComponent {
	// ionic
	@Input() showMinMax: boolean;
	showDimension: boolean;
	dimensionText: string;
	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
		if (!this.maxLength && component.textarea.maxLength) {
			this.maxLength = component.textarea.maxLength;
		}
		if (this.showMinMax && (this.minLength || this.maxLength)) {
			this.showDimension = true;
			this.dimensionText = this.minLength ? '[MIN]: ' + this.minLength : '';
			this.dimensionText += this.maxLength ? ' [MAX]: ' + this.maxLength : '';
		}
	}
	ngAfterViewInitForChildren() {
		super.ngAfterViewInitForChildren();
	}
	ngOnDestroyForChildren() {
		super.ngOnDestroyForChildren();
	}
	getClassName(): string {
		return 'InputTextareaComponent';
	}
}
