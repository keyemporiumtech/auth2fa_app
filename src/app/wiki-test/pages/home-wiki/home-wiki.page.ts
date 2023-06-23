import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { ApplicationStorageService } from '@ddc/kit';

@Component({
	selector: 'wiki-home-wiki',
	templateUrl: './home-wiki.page.html',
	styleUrls: ['./home-wiki.page.scss'],
})
export class HomeWikiPage implements OnInit, ViewWillEnter, ViewWillLeave, OnDestroy {
	flgMenuItems = true;
	timezoneServer: string;
	timezoneServerName: string;
	languageCod: string;
	languageName: string;
	currencyCod: string;
	currencyName: string;
	currencySymbol: string;
	nationCod: string;
	nationName: string;
	constructor(private applicationStorage: ApplicationStorageService) {
		this.timezoneServer = localStorage.getItem('timezoneServer');
		this.timezoneServerName = localStorage.getItem('timezoneNameServer');
		this.languageCod = this.applicationStorage.language.get();
		this.languageName = this.applicationStorage.languageName.get();
		this.currencyCod = this.applicationStorage.currency.get();
		this.currencyName = this.applicationStorage.currencyName.get();
		this.currencySymbol = this.applicationStorage.currencySymbol.get();
		this.nationCod = this.applicationStorage.nation.get();
		this.nationName = this.applicationStorage.nationName.get();
	}

	ngOnInit() {
		// console.error('onInit');
	}
	ionViewWillEnter() {
		// console.error('viewWillEnter');
		this.flgMenuItems = true;
	}
	ionViewWillLeave() {
		// console.error('viewWillLeave');
		this.flgMenuItems = false;
	}
	ngOnDestroy(): void {
		// console.error('onDestroy');
	}
}
