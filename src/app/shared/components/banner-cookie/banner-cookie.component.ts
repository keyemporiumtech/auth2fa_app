import { Component, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { BaseComponent, ApplicationLoggerService, ApplicationStorageService } from '@ddc/kit';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { EnumCookieOperation } from '../../enums/cookie/cookie-operation.enum';
import { EnumCookieNavigation } from '../../enums/cookie/cookie-navigation.enum';
import { ModalController } from '@ionic/angular';
import { ModalUtility } from '../../utility/modal.utility';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'ddc-app-banner-cookie',
	templateUrl: './banner-cookie.component.html',
	styleUrls: ['./banner-cookie.component.scss'],
})
export class BannerCookieComponent extends BaseComponent {
	// emitters
	@Output() emitLoad: EventEmitter<string> = new EventEmitter<string>();
	@Output() emitClose: EventEmitter<string> = new EventEmitter<string>();
	@Output() emitMoreInfo: EventEmitter<string> = new EventEmitter<string>();
	@Output() emitAccept: EventEmitter<string> = new EventEmitter<string>();

	// services
	applicationStorage: ApplicationStorageService;
	router: Router;
	modalController: ModalController;

	// force come back
	subParams: Subscription;
	entered: boolean;

	// cookie choice
	@ViewChild('cookieChoice', { static: true }) cookieChoice: TemplateRef<any>;

	constructor(
		applicationLogger: ApplicationLoggerService,
		applicationStorage: ApplicationStorageService,
		router: Router,
		modalController: ModalController,
		private route: ActivatedRoute,
	) {
		super(applicationLogger);
		this.applicationStorage = applicationStorage;
		this.router = router;
		this.modalController = modalController;
		this.applicationStorage.create('cookieId', 'cookiePolicy' + this.id);
	}

	ngOnInitForChildren() {
		this.subParams = this.router.events
			.pipe(filter((event) => event instanceof NavigationStart))
			.subscribe((event: NavigationStart) => {
				const cookieUrl = this.applicationStorage.get('cookieUrl');
				if (cookieUrl && event.url === cookieUrl.get()) {
					this.onOpen();
				}
			});
	}
	ngAfterViewInitForChildren() {
		this.onOpen();
	}
	ngOnDestroyForChildren() {
		this.entered = false;
		this.subParams.unsubscribe();
	}
	getClassName(): string {
		return 'BannerCookieComponent';
	}

	// functions
	onOpen() {
		// this.applicationStorage.bannerStatus.del();
		const storageVariable: string = this.applicationStorage.bannerStatus.get();
		if (!storageVariable) {
			this.emitLoad.emit('cookiePolicy' + this.id);
			ModalUtility.open(
				this.modalController,
				'APP.COOKIE.CHOICE.TITLE',
				'cookieChoice_' + this.id,
				this.cookieChoice,
				undefined,
				undefined,
				() => {
					this.onClose();
				},
			).then((res) => {
				this.applicationStorage.create('cookieUrl', this.router.url);
			});
		}
	}

	onClose() {
		this.emitClose.emit('cookiePolicy' + this.id);
		this.applicationStorage.bannerStatus.set('cookiePolicy' + this.id);
	}

	// choice
	onChoice(val: EnumCookieOperation) {
		if (val) {
			ModalUtility.close(this.modalController, 'cookieChoice_' + this.id);
		}
	}

	onLink(val: EnumCookieNavigation) {
		if (val) {
			ModalUtility.close(this.modalController, 'cookieChoice_' + this.id);
		}
	}
}
