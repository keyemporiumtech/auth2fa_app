import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BaseModuleWikiPage } from '../../../../shared/wiki-test/base-module-wiki.page';

@Component({
	selector: 'wiki-test-validator-iban',
	templateUrl: './test-validator-iban.component.html',
	styleUrls: ['./test-validator-iban.component.scss'],
})
export class TestValidatorIbanComponent extends BaseModuleWikiPage implements OnInit {
	constructor(router: Router, activatedRoute: ActivatedRoute, menuController: MenuController) {
		super(router, activatedRoute, menuController);
	}

	ngOnInit() {}
}
