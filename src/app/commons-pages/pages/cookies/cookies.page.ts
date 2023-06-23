import { Component, OnInit } from '@angular/core';
import { PreviousRouteService } from '@ddc/kit';

@Component({
	selector: 'mod-app-cookies',
	templateUrl: './cookies.page.html',
	styleUrls: ['./cookies.page.scss'],
})
export class CookiesPage implements OnInit {
	constructor(private previouseRoute: PreviousRouteService) {}

	ngOnInit() {}

	back() {
		this.previouseRoute.back();
	}
}
