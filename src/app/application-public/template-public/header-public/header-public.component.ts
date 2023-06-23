import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { ApplicationLoggerService } from '@ddc/kit';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'public-header-public',
	templateUrl: './header-public.component.html',
	styleUrls: ['./header-public.component.scss'],
})
export class HeaderPublicComponent extends HeaderComponent implements OnInit {
	constructor(applicationLogger: ApplicationLoggerService, router: Router, menu: MenuController) {
		super(applicationLogger, router, menu);
	}

	ngOnInit() {
		super.ngOnInit();
		this.headerTitle = environment.appName;
	}
}
