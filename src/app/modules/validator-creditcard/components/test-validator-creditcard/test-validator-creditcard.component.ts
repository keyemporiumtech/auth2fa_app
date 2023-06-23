import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BaseModuleWikiPage } from '../../../../shared/wiki-test/base-module-wiki.page';

@Component({
	selector: 'wiki-test-validator-creditcard',
	templateUrl: './test-validator-creditcard.component.html',
	styleUrls: ['./test-validator-creditcard.component.scss'],
})
export class TestValidatorCreditcardComponent extends BaseModuleWikiPage implements OnInit {
	constructor(router: Router, activatedRoute: ActivatedRoute, menuController: MenuController) {
		super(router, activatedRoute, menuController);
	}

	ngOnInit() {}
}
