import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MessageElementComponent } from './components/message-element/message-element.component';
import { ModalComponent } from './components/modal/modal.component';
import { EnvironmentLoaderService, KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { environment } from '../../environments/environment';
import { AudioPlaylistComponent } from './components/audio-playlist/audio-playlist.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TableListComponent } from './pagination/table-list/table-list.component';
import { TableOrderComponent } from './pagination/table-order/table-order.component';
import { TablePaginateComponent } from './pagination/table-paginate/table-paginate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMessagesComponent } from './form/input-messages/input-messages.component';
import { InputTextComponent } from './form/input-text/input-text.component';
import { AlertComponent } from './components/alert/alert.component';
import { InputSelectComponent } from './form/input-select/input-select.component';
import { InputAutocompleteComponent } from './form/input-autocomplete/input-autocomplete.component';
import { KitIonicModule } from '@ddc/kit-ionic';
import { InputCheckboxComponent } from './form/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './form/input-radio/input-radio.component';
import { InputNumberComponent } from './form/input-number/input-number.component';
import { InputDecimalComponent } from './form/input-decimal/input-decimal.component';
import { InputCurrencyComponent } from './form/input-currency/input-currency.component';
import { InputTextareaComponent } from './form/input-textarea/input-textarea.component';
import { InputDateComponent } from './form/input-date/input-date.component';
import { InputPhoneComponent } from './form/input-phone/input-phone.component';
import { InputEmailComponent } from './form/input-email/input-email.component';
import { InputFileComponent } from './form/input-file/input-file.component';
import { InputColorComponent } from './form/input-color/input-color.component';
import { InputGenericComponent } from './form/input-generic/input-generic.component';
import { FormPageComponent } from './form/form-page/form-page.component';
import { InputPasswordComponent } from './form/input-password/input-password.component';
import { InputSelectHtmlComponent } from './form/input-select-html/input-select-html.component';
import { MapComponent } from './components/map/map.component';
import { AddressSearchComponent } from './components/address-search/address-search.component';
import { BannerCookieComponent } from './components/banner-cookie/banner-cookie.component';
import { CookieChoiceComponent } from './components/banner-cookie/cookie-choice/cookie-choice.component';

@NgModule({
	declarations: [
		LoadingComponent,
		HeaderComponent,
		ModalComponent,
		MessageElementComponent,
		AudioPlaylistComponent,
		AccordionComponent,
		TableListComponent,
		TableOrderComponent,
		TablePaginateComponent,
		AlertComponent,
		// form
		FormPageComponent,
		InputGenericComponent,
		InputMessagesComponent,
		InputTextComponent,
		InputSelectComponent,
		InputAutocompleteComponent,
		InputCheckboxComponent,
		InputRadioComponent,
		InputNumberComponent,
		InputDecimalComponent,
		InputCurrencyComponent,
		InputTextareaComponent,
		InputDateComponent,
		InputPhoneComponent,
		InputEmailComponent,
		InputFileComponent,
		InputColorComponent,
		InputPasswordComponent,
		InputSelectHtmlComponent,
		MapComponent,
		AddressSearchComponent,
		BannerCookieComponent,
		CookieChoiceComponent,
	],
	imports: [
		IonicModule,
		CommonModule,
		TranslateModule,
		FormsModule,
		ReactiveFormsModule,
		KitModule,
		RestModule,
		KitIonicModule,
	],
	exports: [
		LoadingComponent,
		HeaderComponent,
		ModalComponent,
		MessageElementComponent,
		AudioPlaylistComponent,
		AccordionComponent,
		TableListComponent,
		TableOrderComponent,
		TablePaginateComponent,
		AlertComponent,
		// form
		FormPageComponent,
		InputGenericComponent,
		InputMessagesComponent,
		InputTextComponent,
		InputSelectComponent,
		InputAutocompleteComponent,
		InputCheckboxComponent,
		InputRadioComponent,
		InputNumberComponent,
		InputDecimalComponent,
		InputCurrencyComponent,
		InputTextareaComponent,
		InputDateComponent,
		InputPhoneComponent,
		InputEmailComponent,
		InputFileComponent,
		InputColorComponent,
		InputPasswordComponent,
		InputSelectHtmlComponent,
		MapComponent,
		AddressSearchComponent,
		BannerCookieComponent,
		CookieChoiceComponent,
	],
})
export class SharedModule {
	constructor(environmentLoader: EnvironmentLoaderService) {
		environmentLoader.setEnviroment(environment);
	}
	static forRoot() {
		return {
			ngModule: SharedModule,
			providers: [],
		};
	}
}
