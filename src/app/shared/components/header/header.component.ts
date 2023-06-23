import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationLoggerService, BaseComponent } from '@ddc/kit';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'ddc-app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent {
	router: Router;
	@Input() headerTitle: string = '';
	@Input() flgBack: boolean;
	@Input() hrefBack: string = '';
	@Input() flgMenuItems: boolean;
	@Input() flgLogo: boolean;
	@Input() menuId: string = 'start';
	menu: MenuController;
	constructor(applicationLogger: ApplicationLoggerService, routerIn: Router, menu: MenuController) {
		super(applicationLogger);
		this.router = routerIn;
		this.menu = menu;
	}

	ngOnInitForChildren() {}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {}
	getClassName(): string {
		return 'HeaderComponent';
	}

	openMenu() {
		if (this.menuId) {
			this.menu.enable(true, this.menuId);
			this.menu.open(this.menuId);
		}
	}
}
