import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {
	ApplicationStorageService,
	MessageService,
	FileEmbedModel,
	MessageModel,
	EnumMessageType,
	PreviousRouteService,
	RouteUrlModel,
} from '@ddc/kit';
import { Router } from '@angular/router';

@Component({
	selector: 'public-footer-public',
	templateUrl: './footer-public.component.html',
	styleUrls: ['./footer-public.component.scss'],
})
export class FooterPublicComponent implements OnInit {
	VERSION: string;
	TEMPLATE_VERSION: string;

	constructor(
		private applicationStorage: ApplicationStorageService,
		private router: Router,
		private messageService: MessageService,
		private previouseRoute: PreviousRouteService,
	) {
		this.VERSION = environment.VERSION;
		this.TEMPLATE_VERSION = environment.TEMPLATE_VERSION;
	}

	ngOnInit() {}

	privacy() {
		const fileEmbed = this.applicationStorage.privacyPolicyResource.getObj() as FileEmbedModel;
		if (fileEmbed) {
			fileEmbed.back = this.router.url;
			this.applicationStorage.fileEmbed.setObj(fileEmbed);
			this.router.navigate(['commons', 'file', 1]);
		} else {
			this.messageService.sendSubjectMessage(
				new MessageModel(
					EnumMessageType.INFO,
					400,
					'TODO',
					'Pagina da definire in LoadAppComponent',
				),
				environment.messages.idMessagePrincipal,
			);
		}
	}

	cookie() {
		const fileEmbed = this.applicationStorage.cookiePolicyResource.getObj() as FileEmbedModel;
		if (fileEmbed) {
			fileEmbed.back = this.router.url;
			this.applicationStorage.fileEmbed.setObj(fileEmbed);
			this.router.navigate(['commons', 'file', 1]);
		} else {
			this.messageService.sendSubjectMessage(
				new MessageModel(
					EnumMessageType.INFO,
					400,
					'TODO',
					'Pagina da definire in LoadAppComponent',
				),
				environment.messages.idMessagePrincipal,
			);
		}
	}

	term() {
		const fileEmbed = this.applicationStorage.termPolicyResource.getObj() as FileEmbedModel;
		if (fileEmbed) {
			fileEmbed.back = this.router.url;
			this.applicationStorage.fileEmbed.setObj(fileEmbed);
			this.router.navigate(['commons', 'file', 1]);
		} else {
			this.messageService.sendSubjectMessage(
				new MessageModel(
					EnumMessageType.INFO,
					400,
					'TODO',
					'Pagina da definire in LoadAppComponent',
				),
				environment.messages.idMessagePrincipal,
			);
		}
	}

	goToPageCookie() {
		this.previouseRoute.navigateStore(new RouteUrlModel(['commons', 'cookies']));
	}
}
