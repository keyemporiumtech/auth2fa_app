import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApplicationLoggerService, FileService } from '@ddc/kit';
import { TranslateService } from '@ngx-translate/core';
import { TestFormComponentsComponent } from '../test-form-components/test-form-components.component';

@Component({
	selector: 'wiki-test-form-generic',
	templateUrl: './test-form-generic.component.html',
	styleUrls: ['./test-form-generic.component.scss'],
})
export class TestFormGenericComponent extends TestFormComponentsComponent {
	constructor(
		applicationLogger: ApplicationLoggerService,
		fileService: FileService,
		fb: FormBuilder,
		translate: TranslateService,
	) {
		super(applicationLogger, fileService, fb, translate);
	}
}
