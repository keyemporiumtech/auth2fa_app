import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationLoggerService } from '@ddc/kit';
import { MenuController } from '@ionic/angular';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
	selector: 'wiki-header-wiki',
	templateUrl: './header-wiki.component.html',
	styleUrls: ['./header-wiki.component.scss'],
})
export class HeaderWikiComponent extends HeaderComponent implements OnInit {
	constructor(applicationLogger: ApplicationLoggerService, router: Router, menu: MenuController) {
		super(applicationLogger, router, menu);
	}

	ngOnInit() {
		super.ngOnInit();
	}
}
