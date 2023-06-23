import { Component } from '@angular/core';
import { BaseModuleWikiPage } from '../../../shared/wiki-test/base-module-wiki.page';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'wiki-test-modules',
	templateUrl: './test-modules.page.html',
	styleUrls: ['./test-modules.page.scss'],
})
export class TestModulesPage extends BaseModuleWikiPage {
	constructor(router: Router, activatedRoute: ActivatedRoute, menuController: MenuController) {
		super(router, activatedRoute, menuController);
	}
}
