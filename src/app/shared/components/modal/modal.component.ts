import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApplicationLoggerService, BaseComponent, StringTranslate } from '@ddc/kit';
import { template } from '../../../../environments/template/template';

@Component({
	selector: 'ddc-app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
})
export class ModalComponent extends BaseComponent {
	@Input() modalTitle: string | StringTranslate;
	@Input() iconClose: string;
	@Input() templateBody: any;
	@Input() templateFooter: any;

	constructor(
		applicationLogger: ApplicationLoggerService,
		private modalController: ModalController,
	) {
		super(applicationLogger);
		this.iconClose = template.icons.genericClose;
	}

	ngOnInitForChildren() {}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {}
	getClassName(): string {
		return 'ModalComponent';
	}

	async open(title: string | StringTranslate, css?: string) {
		const modal = await this.modalController.create({
			component: ModalComponent,
			cssClass: css ? css : '',
			componentProps: {
				modalTitle: title,
			},
		});
		return await modal.present();
	}

	close() {
		this.modalController.dismiss({
			dismissed: true,
		});
	}
}
