import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import {
	ApplicationLoggerService,
	ApplicationStorageService,
	BasePageComponent,
	FileEmbedModel,
	StringTranslate,
} from '@ddc/kit';

@Component({
	selector: 'mod-app-read-file',
	templateUrl: './read-file.page.html',
	styleUrls: ['./read-file.page.scss'],
})
export class ReadFilePage extends BasePageComponent {
	@Output() closeEmit: EventEmitter<any> = new EventEmitter<any>();
	@Input() fileEmbed: FileEmbedModel;
	@Input() title: string | StringTranslate;
	@Input() width: string;
	@Input() height: string;
	closeIcon: string;
	page: string;

	constructor(
		applicationLogger: ApplicationLoggerService,
		router: Router,
		activatedRoute: ActivatedRoute,
		private applicationStorage: ApplicationStorageService,
	) {
		super(applicationLogger, router, activatedRoute);
		// this.closeIcon = environment.icons.genericClose;
	}

	manageDataParams(data: Data) {}
	manageRouteParams(data: ParamMap) {
		this.page = data.get('page');
	}
	manageQueryParams(data: ParamMap) {}
	ngOnInitForChildren() {
		if (this.page) {
			this.fileEmbed = this.applicationStorage.fileEmbed.getObj();
			this.title = this.fileEmbed.title;
		}
	}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {}
	getClassName(): string {
		return 'ReadFilePage';
	}

	/**
	 * Viene emesso solo se fileEmbed non ha valorizzata la proprietà back
	 * @param $event evento click sull'icona close
	 */
	closeFile($event: any) {
		this.closeEmit.emit($event);
		if (this.page) {
			this.applicationStorage.fileEmbed.del();
		}
	}
}
