import { Component } from '@angular/core';
import {
	ApplicationLoggerService,
	OptionListModel,
	TranslateUtility,
	WaitElementsUtility,
} from '@ddc/kit';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Subscription } from 'rxjs';
import { InputSelectComponent } from '../input-select/input-select.component';

@Component({
	selector: 'ddc-app-input-select-html',
	templateUrl: './input-select-html.component.html',
	styleUrls: ['./input-select-html.component.scss'],
})
export class InputSelectHtmlComponent extends InputSelectComponent {
	constructor(
		applicationLogger: ApplicationLoggerService,
		private translateService: TranslateService,
	) {
		super(applicationLogger);
	}

	subClickOpen: Subscription;
	subSelectedItem: Subscription;

	manageClick() {
		const $obsEl = this.multiple
			? WaitElementsUtility.waitWhileDomElIsReady('.alert-checkbox-label')
			: WaitElementsUtility.waitWhileDomElIsReady('.alert-radio-label');

		this.subClickOpen = $obsEl.subscribe(() => {
			const radios = this.multiple
				? document.getElementsByClassName('alert-checkbox-label')
				: document.getElementsByClassName('alert-radio-label');
			for (let index = 0; index < radios.length; index++) {
				const singrad = radios[index];
				singrad.innerHTML = TranslateUtility.get(this.options[index].text, this.translateService);
				if (this.options[index].cssClass) {
					singrad.classList.add(this.options[index].cssClass);
				}
				if (this.options[index].cssStyle) {
					for (const prop in this.options[index].cssStyle) {
						if (Object.prototype.hasOwnProperty.call(this.options[index].cssStyle, prop)) {
							(singrad as HTMLElement).style[prop] = this.options[index].cssStyle[prop];
						}
					}
				}
				// (singrad as HTMLElement).style.textTransform = 'uppercase';
			}
		});
	}

	manageSelected(value: any) {
		if (
			this.field &&
			this.field.formControl &&
			this.field.formControl.value &&
			this.options &&
			this.options.length
		) {
			this.subSelectedItem = WaitElementsUtility.waitWhileDomElIsReady(
				`[id='${this.id}']`,
			).subscribe(() => {
				const select = document.getElementById(this.id);
				if (select) {
					const selected = select.shadowRoot.querySelector('.select-text');

					if (selected) {
						let selectedOptions: OptionListModel[] = [];
						if (this.multiple) {
							selectedOptions = this.options.filter((el) =>
								this.field.formControl.value.includes(el.key),
							);
						} else {
							selectedOptions = [
								this.options.find((el) => el.key === this.field.formControl.value),
							];
						}

						for (let index = 0; index < selectedOptions.length; index++) {
							const option = selectedOptions[index];
							if (index === 0) {
								selected.innerHTML = TranslateUtility.get(option.text, this.translateService);
							} else {
								selected.innerHTML +=
									', ' + TranslateUtility.get(option.text, this.translateService);
							}
							// (singrad as HTMLElement).style.fontSize = '22px';
							// (singrad as HTMLElement).style.textTransform = 'uppercase';
						}
					}
				}

				this.selectchanged.emit(value);
			});
		}

		/*
		setTimeout(() => {
			if (
				this.field &&
				this.field.formControl &&
				this.field.formControl.value &&
				this.options &&
				this.options.length
			) {
				try {
					const select = document.getElementById(this.id);
					if (select) {
						const selected = select.shadowRoot.querySelector('.select-text');

						if (selected) {
							let selectedOptions: OptionListModel[] = [];
							if (this.multiple) {
								selectedOptions = this.options.filter((el) =>
									this.field.formControl.value.includes(el.key),
								);
							} else {
								selectedOptions = [
									this.options.find((el) => el.key === this.field.formControl.value),
								];
							}

							for (let index = 0; index < selectedOptions.length; index++) {
								const option = selectedOptions[index];
								if (index === 0) {
									selected.innerHTML = TranslateUtility.get(option.text, this.translateService);
								} else {
									selected.innerHTML +=
										', ' + TranslateUtility.get(option.text, this.translateService);
								}
								// (singrad as HTMLElement).style.fontSize = '22px';
								// (singrad as HTMLElement).style.textTransform = 'uppercase';
							}
						}
					}

					this.selectchanged.emit(value);
				} catch (e) {}
			}
		}, 200);
		*/
	}

	ngOnDestroyForChildren() {
		super.ngOnDestroyForChildren();
		if (this.subClickOpen) {
			this.subClickOpen.unsubscribe();
		}
		if (this.subSelectedItem) {
			this.subSelectedItem.unsubscribe();
		}
	}
}
