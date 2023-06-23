import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController, ModalController } from '@ionic/angular';
import { ModalUtility } from '../../../shared/utility/modal.utility';
import { BaseModuleWikiPage } from '../../../shared/wiki-test/base-module-wiki.page';

@Component({
	selector: 'wiki-test-shared',
	templateUrl: './test-shared.page.html',
	styleUrls: ['./test-shared.page.scss'],
})
export class TestSharedPage extends BaseModuleWikiPage {
	constructor(
		router: Router,
		activatedRoute: ActivatedRoute,
		menuController: MenuController,
		private modalController: ModalController,
	) {
		super(router, activatedRoute, menuController);
	}

	openModal(id: string, body: any) {
		ModalUtility.open(this.modalController, 'Esempio ' + id, id, body);
	}
	closeModal(id: string) {
		ModalUtility.close(this.modalController, id);
	}
}
