import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
	ApplicationLoggerService,
	BaseComponent,
	StringTranslate,
	TranslateUtility,
} from '@ddc/kit';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
/**
 * CSS
 * alert-wrapper
 * alert-head
 * 		alert-title
 * 		alert-sub-title
 * alert-message
 * alert-input-group
 * alert-button-group
 * 		alert-button
 * 		alert-button-inner
 */
@Component({
	selector: 'ddc-app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
})
export class AlertComponent extends BaseComponent {
	@Input() cssClass: string;
	@Input() title: string | StringTranslate;
	@Input() subTitle: string | StringTranslate;
	@Input() message: string | StringTranslate;
	@Input() textOk: string | StringTranslate;
	@Input() cssOk: string;
	@Input() textCancel: string | StringTranslate;
	@Input() cssCancel: string;
	@Input() fields: any[];
	@Input() buttons: any[];
	// style
	@Input() type: 'INFO' | 'WARNING' | 'ERROR';
	@Input() fill: boolean;
	// events
	@Output() cancelEmit: EventEmitter<any> = new EventEmitter<any>();
	@Output() okEmit: EventEmitter<any> = new EventEmitter<any>();
	// sub
	subText: Subscription;

	constructor(
		applicationLogger: ApplicationLoggerService,
		public alertController: AlertController,
		private translateService: TranslateService,
	) {
		super(applicationLogger);
		this.fields = [];
		this.buttons = [];
		this.textOk = 'APP.BUTTON.OK';
		this.textCancel = 'APP.BUTTON.CANCEL';
	}

	ngOnInitForChildren() {}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {
		if (this.subText) {
			this.subText.unsubscribe();
		}
	}
	getClassName(): string {
		return 'AlertComponent';
	}

	get cssAlert(): string {
		if (this.cssClass) {
			return this.cssClass;
		}
		if (this.type) {
			switch (this.type) {
				case 'INFO':
					return this.fill ? 'alert-info-fill' : 'alert-info';
				case 'WARNING':
					return this.fill ? 'alert-warning-fill' : 'alert-warning';
				case 'ERROR':
					return this.fill ? 'alert-error-fill' : 'alert-error';
				default:
					return undefined;
			}
		}
		return undefined;
	}

	async open() {
		const obj = this.buildInfo();
		obj.buttons = [this.buildOk()];
		if (this.fields.length) {
			obj.inputs = this.fields;
		}
		const alert = await this.alertController.create(obj);
		await alert.present();
	}

	async openConfirm() {
		const obj = this.buildInfo();
		obj.buttons = [this.buildCancel(), this.buildOk()];
		if (this.fields.length) {
			obj.inputs = this.fields;
		}
		const alert = await this.alertController.create(obj);
		await alert.present();
	}

	async openPrompt(removeCancel?: boolean, removeOk?: boolean) {
		const obj = this.buildInfo();
		obj.buttons = this.buttons.length ? [...this.buttons] : [];
		if (!removeCancel) {
			obj.buttons.unshift(this.buildCancel());
		}
		if (!removeOk) {
			obj.buttons.push(this.buildOk());
		}
		if (this.fields.length) {
			obj.inputs = this.fields;
		}
		const alert = await this.alertController.create(obj);
		await alert.present();
	}

	private buildInfo(): any {
		const obj: any = {};
		if (this.cssAlert) {
			obj.cssClass = this.cssAlert;
		}
		if (this.title) {
			obj.header = TranslateUtility.get(this.title, this.translateService);
		}
		if (this.subTitle) {
			obj.subHeader = TranslateUtility.get(this.subTitle, this.translateService);
		}
		if (this.message) {
			obj.message = TranslateUtility.get(this.message, this.translateService);
		}
		return obj;
	}

	private buildCancel() {
		const obj: any = {};
		obj.role = 'cancel';
		obj.cssClass = this.cssCancel ? this.cssCancel : 'secondary';
		if (this.textCancel) {
			obj.text = TranslateUtility.get(this.textCancel, this.translateService);
		}
		obj.handler = (data) => {
			this.cancelEmit.emit(data);
		};
		return obj;
	}

	private buildOk() {
		const obj: any = {};
		if (this.cssOk) {
			obj.cssClass = this.cssOk;
		}
		if (this.textOk) {
			obj.text = TranslateUtility.get(this.textOk, this.translateService);
		}
		obj.handler = (data) => {
			this.okEmit.emit(data);
		};
		return obj;
	}
}
