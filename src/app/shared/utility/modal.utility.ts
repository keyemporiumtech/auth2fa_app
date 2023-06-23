import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

export class ModalUtility {
	static async open(
		modalController: ModalController,
		title: string,
		id: string,
		body?: any,
		footer?: any,
		css?: string,
		didDismiss?: () => any,
	) {
		const modal = await modalController.create({
			component: ModalComponent,
			cssClass: css ? css : '',
			componentProps: {
				modalTitle: title,
				templateBody: body,
				templateFooter: footer,
			},
			id: id,
		});
		modal.onDidDismiss().then((data) => {
			didDismiss();
		});
		return await modal.present();
	}

	static close(modalController: ModalController, id: string) {
		modalController.dismiss(
			{
				dismissed: true,
			},
			undefined,
			id,
		);
	}
}
