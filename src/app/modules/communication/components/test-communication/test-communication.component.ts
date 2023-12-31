import { Component, OnInit } from '@angular/core';
import { MailModel } from '../../models/mail.model';
import { BaseModuleWikiPage } from '../../../../shared/wiki-test/base-module-wiki.page';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'wiki-test-communication',
	templateUrl: './test-communication.component.html',
	styleUrls: ['./test-communication.component.scss'],
})
export class TestCommunicationComponent extends BaseModuleWikiPage implements OnInit {
	idMail: string;
	constructor(router: Router, activatedRoute: ActivatedRoute, menuController: MenuController) {
		super(router, activatedRoute, menuController);
	}

	ngOnInit() {}

	setDetailMail(mail?: MailModel) {
		this.idMail = mail ? mail.id : undefined;
		this.set('MAIL-UNIQUE');
	}
}
