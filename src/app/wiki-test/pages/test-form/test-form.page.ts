import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BaseModuleWikiPage } from '../../../shared/wiki-test/base-module-wiki.page';

@Component({
	selector: 'wiki-test-form',
	templateUrl: './test-form.page.html',
	styleUrls: ['./test-form.page.scss'],
})
export class TestFormPage extends BaseModuleWikiPage {
	constructor(router: Router, activatedRoute: ActivatedRoute, menuController: MenuController) {
		super(router, activatedRoute, menuController);
	}
}
