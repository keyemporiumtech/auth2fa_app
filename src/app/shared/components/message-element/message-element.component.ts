import { AfterViewChecked, Component, Input, ViewChild } from '@angular/core';
import {
	BaseMessageSubjectComponent,
	ApplicationLoggerService,
	MessageService,
	TranslateUtility,
} from '@ddc/kit';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { template } from '../../../../environments/template/template';
import { ModalUtility } from '../../utility/modal.utility';

@Component({
	selector: 'ddc-app-message-element',
	templateUrl: './message-element.component.html',
	styleUrls: ['./message-element.component.scss'],
})
export class MessageElementComponent
	extends BaseMessageSubjectComponent
	implements AfterViewChecked
{
	@Input() iconClose: string;
	@ViewChild('bodyModal') bodyModal: any;
	@ViewChild('footerModal') footerModal: any;
	constructor(
		applicationLogger: ApplicationLoggerService,
		messageService: MessageService,
		private translateService: TranslateService,
		private modalController: ModalController,
	) {
		super(applicationLogger, messageService);
		this.iconClose = template.icons.genericClose;
	}

	getClassName(): string {
		return 'MessageElementComponent';
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
	}
	ngAfterViewInitForChildren() {}
	ngAfterViewChecked() {
		if (this.typeComponent === 'DIV' && !this.flgReaded && this.currentMessage) {
			// console.log('changes entered');
			this.flgReaded = true;
		}
		if (this.typeComponent === 'MODAL' && !this.flgReaded && this.currentMessage) {
			// console.log('changes entered');
			this.flgReaded = true;
			this.openModal();
		}
	}

	getCSSClassInfo(): string {
		return this.typeComponent === 'MODAL' ? 'modal-info' : 'div-info';
	}
	getCSSClassWarning(): string {
		return this.typeComponent === 'MODAL' ? 'modal-warning' : 'div-warning';
	}
	getCSSClassError(): string {
		return this.typeComponent === 'MODAL' ? 'modal-error' : 'div-error';
	}
	getCSSClassException(): string {
		return this.typeComponent === 'MODAL' ? 'modal-exception' : 'div-exception';
	}

	openModal() {
		let title = '';
		if (this.currentMessage && this.currentMessage.title) {
			title = TranslateUtility.get(this.currentMessage.title, this.translateService);
		}
		ModalUtility.open(
			this.modalController,
			title,
			this.id,
			this.bodyModal,
			this.footerModal,
			this.cssClassMessage,
		);
	}
}
