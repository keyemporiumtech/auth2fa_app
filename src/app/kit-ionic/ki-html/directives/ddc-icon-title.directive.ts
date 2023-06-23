import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[ddcIconTitle]',
})
export class DdcIconTitleDirective implements OnInit {
	// eslint-disable-next-line @angular-eslint/no-input-rename
	@Input('iconTitle') iconTitle: string;

	constructor(private el: ElementRef) {
		// Doing nothing.
	}

	ngOnInit(): void {
		const removeTitle = () => {
			if (
				this.el.nativeElement &&
				this.el.nativeElement.shadowRoot &&
				this.el.nativeElement.shadowRoot.querySelector('.icon-inner svg title')
			) {
				this.el.nativeElement.shadowRoot.querySelector('.icon-inner svg title').innerHTML =
					this.iconTitle || '';
			} else {
				setTimeout(() => {
					removeTitle();
				}, 500);
			}
		};
		removeTitle();
	}
}
