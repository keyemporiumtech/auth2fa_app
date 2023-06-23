import { Component, Input } from '@angular/core';
import { ApplicationLoggerService, BaseComponent } from '@ddc/kit';

@Component({
	selector: 'ddc-app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent extends BaseComponent {
	private _expanded: boolean;
	@Input() set expanded(val: boolean) {
		this._expanded = val;
	}
	get expanded(): boolean {
		return this._expanded;
	}

	@Input() cssClass: any;
	@Input() cssStyle: any;
	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
	}

	ngOnInitForChildren() {}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {}
	getClassName(): string {
		return 'AccordionComponent';
	}

	toggle() {
		this.expanded = !this.expanded;
	}
}
