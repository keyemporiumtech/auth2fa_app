import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';

@Component({
	selector: 'public-home-public',
	templateUrl: './home-public.page.html',
	styleUrls: ['./home-public.page.scss'],
})
export class HomePublicPage implements OnInit, ViewWillEnter, ViewWillLeave {
	flgMenuItems: boolean;
	constructor(private router: Router) {}

	ngOnInit() {}
	ionViewWillEnter() {
		// console.error('viewWillEnter');
		this.flgMenuItems = true;
	}
	ionViewWillLeave() {
		// console.error('viewWillLeave');
		this.flgMenuItems = false;
	}

	wiki() {
		this.router.navigate(['wiki']);
	}
}
