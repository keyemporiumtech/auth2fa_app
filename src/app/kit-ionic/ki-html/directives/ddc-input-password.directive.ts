import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { template } from '../../../../environments/template/template';
@Directive({
	selector: '[ddcInputPassword]',
})
export class DdcInputPasswordDirective implements OnInit {
	private _shown = false;
	private _icon: any;
	/* eslint-disable @angular-eslint/no-input-rename */
	@Input('cssShow') iconShow: any;
	@Input('cssHide') iconHide: any;
	@Input('titleShow') titleShow: string = undefined;
	@Input('titleHide') titleHide: string = undefined;

	constructor(private el: ElementRef) {
		this.setup();
	}

	ngOnInit() {
		if (!this.iconShow) {
			this.iconShow = template.icons.showField;
		}
		if (!this.iconHide) {
			this.iconHide = template.icons.hideField;
		}
		if (this.iconShow) {
			this._icon.setAttribute('name', this.iconShow);
		}
		if (this.titleShow) {
			this.changeIconTitle(this.titleShow);
		}
	}

	changeIconTitle(title: string) {
		setTimeout(() => {
			const icon = this._icon.shadowRoot.querySelector('.icon-inner svg title');
			if (icon) {
				icon.innerHTML = title;
			}
		}, 1000);
	}

	toggle(icon: HTMLElement) {
		this._shown = !this._shown;
		if (this._shown) {
			this.el.nativeElement.setAttribute('type', 'text');
			if (this.iconHide) {
				icon.setAttribute('name', this.iconHide);
			}
			if (this.titleHide) {
				this.changeIconTitle(this.titleHide);
			}
		} else {
			this.el.nativeElement.setAttribute('type', 'password');
			if (this.iconShow) {
				icon.setAttribute('name', this.iconShow);
			}
			if (this.titleShow) {
				this.changeIconTitle(this.titleShow);
			}
		}
	}
	setup() {
		this.el.nativeElement.setAttribute('type', 'password');
		const parent = this.el.nativeElement.parentNode;
		this._icon = document.createElement('ion-icon');
		this._icon.setAttribute('slot', 'end');
		this._icon.setAttribute('class', 'ion-padding pointer');
		if (this.iconHide) {
			this._icon.setAttribute('name', this.iconHide);
		}
		this._icon.addEventListener('click', (event) => {
			this.toggle(this._icon);
		});
		this.el.nativeElement.appendChild(this._icon);
	}
}
