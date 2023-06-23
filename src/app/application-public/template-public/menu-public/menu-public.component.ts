import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
	selector: 'public-menu-public',
	templateUrl: './menu-public.component.html',
	styleUrls: ['./menu-public.component.scss'],
})
export class MenuPublicComponent implements OnInit {
	title: string;
	view: string;
	constructor(private router: Router) {
		this.title = environment.appName;
	}

	ngOnInit() {}

	set(view: string) {
		this.view = view;
	}

	go(view: string) {
		this.router.navigate([view]);
	}
}
