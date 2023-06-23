import { Component, Input, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'ddc-app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
	_loading: boolean = false;
	@Input()
	set loading(loading: boolean) {
		this._loading = loading;
		if (loading) {
			this.presentLoading();
		}
	}

	get loading(): boolean {
		return this._loading;
	}

	constructor(public loadingController: LoadingController, private translate: TranslateService) {}

	ngOnInit() {
		this.presentLoading();
	}

	async presentLoading() {
		const loading = await this.loadingController.create({
			cssClass: 'loading',
			message: this.translate.instant('APP.LOADER.MESSAGE_WAIT'),
			duration: 2000,
		});
		await loading.present();

		const { role, data } = await loading.onDidDismiss();
		console.log('Loading dismissed!');
	}
}
