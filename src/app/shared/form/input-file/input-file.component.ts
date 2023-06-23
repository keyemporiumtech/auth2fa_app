import { Component, Input, ViewChild } from '@angular/core';
import {
	ApplicationLoggerService,
	EnumSizeFormat,
	FileEmbedModel,
	StringTranslate,
} from '@ddc/kit';
import { component } from '../../../../environments/template/component';
import { template } from '../../../../environments/template/template';
import { KiUploadFileComponent } from '@ddc/kit-ionic';
import { BaseInputIonicComponent } from '../base-input-ionic.component';

@Component({
	selector: 'ddc-app-input-file',
	templateUrl: './input-file.component.html',
	styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent extends BaseInputIonicComponent {
	@ViewChild('uploadFile') uploadFile: KiUploadFileComponent;
	@Input() name: string;
	@Input() multiple: boolean;
	@Input() numMaxFiles: number;
	@Input() maxSize: number; // MB
	@Input() maxSizeUnit: EnumSizeFormat;
	@Input() extensions: string;
	@Input() closeItem: string;
	@Input() deleteItems: string;

	VALUE_FROM_UPLOAD: boolean;

	lastValue;
	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
		if (this.maxSize && !this.maxSizeUnit) {
			this.maxSizeUnit = EnumSizeFormat.MEGABYTE;
		}
		if (!this.name) {
			this.name = this.id;
		}
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
		if (!this.closeItem) {
			this.closeItem = template.icons.genericClose;
		}
		if (!this.deleteItems) {
			this.deleteItems = template.icons.deleteAll;
		}
		if (!this.maxSize) {
			this.maxSize = component.file.maxUploadSizeMB;
			this.maxSizeUnit = EnumSizeFormat.MEGABYTE;
		}
	}

	behaviourOnSubscribe(values: any) {
		if (!values) {
			this.uploadFile.resetAll();
		} else {
			this.uploadFile.attachments = [];
			values.forEach((element) => {
				this.uploadFile.validateFile(element);
				if (!this.uploadFile.error) {
					this.uploadFile.attachments.push(element);
					this.uploadFile.resetFile();
					this.quitReplace(this.uploadFile.attachments);
				}
			});
		}
		this.manageMessages();
	}

	behaviourOnSubscribeStatus(status: any) {
		if (status === 'DISABLED') {
			this.uploadFile.manageErrors(false);
			this.manageMessages();
		}
	}

	manageInfo() {
		super.manageInfo();
		if (this.numMaxFiles) {
			this.field.supports.push(
				new StringTranslate('VALIDATION.UPLOAD.MAX_NUM_UPLOAD_FILE', { max: this.numMaxFiles }),
			);
		}
		if (this.maxSize) {
			this.field.supports.push(
				new StringTranslate('VALIDATION.UPLOAD.MAX_SIZE_INFO', {
					size: this.maxSize,
					unit: this.maxSizeUnit,
				}),
			);
		}
		if (this.extensions) {
			this.field.supports.push(
				new StringTranslate('VALIDATION.UPLOAD.FILE_EXT_INFO', { ext: this.extensions }),
			);
		}
	}

	ngAfterViewInitForChildren() {
		super.ngAfterViewInitForChildren();
	}
	ngOnDestroyForChildren() {
		super.ngOnDestroyForChildren();
	}
	getClassName(): string {
		return 'InputFileComponent';
	}

	setAutomaticValidations() {}

	setPropertiesFromField() {
		this.name = this.field.property.name;
		this.multiple = this.field.property.multiple;
		this.numMaxFiles = this.field.property.numMaxFiles;
		this.maxSize = this.field.property.maxSize;
		this.maxSizeUnit = this.field.property.maxSizeUnit;
		this.extensions = this.field.property.extensions;
		this.closeItem = this.field.property.closeItem;
		this.deleteItems = this.field.property.deleteItems;
	}

	onAddFiles(val: FileEmbedModel[]) {
		if (this.field && this.field.formControl) {
			this.VALUE_FROM_UPLOAD = true;
			this.field.formControl.setValue(val);
		}
	}
	onError(val: boolean) {
		if (val) {
			this.iconClass = template.icons.iconInvalid + ' input-invalid-icon';
			this.cssInput['input-invalid'] = true;
		} else {
			this.evalInputStyles();
		}
	}
}