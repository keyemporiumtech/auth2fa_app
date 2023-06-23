import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BaseModuleWikiPage } from '../../../shared/wiki-test/base-module-wiki.page';

@Component({
	selector: 'wiki-test-kit',
	templateUrl: './test-kit.page.html',
	styleUrls: ['./test-kit.page.scss'],
})
export class TestKitPage extends BaseModuleWikiPage {
	constructor(router: Router, activatedRoute: ActivatedRoute, menuController: MenuController) {
		super(router, activatedRoute, menuController);
	}
}
