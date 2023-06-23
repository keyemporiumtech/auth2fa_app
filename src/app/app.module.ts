import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RestModule } from '@ddc/rest';
import { EnvironmentLoaderService, KitModule, MultiTranslateHttpLoader } from '@ddc/kit';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { InitModule } from './init/init.module';
import { SharedModule } from './shared/shared.module';
import { KitIonicModule } from '@ddc/kit-ionic';
import { ApplicationSharedModule } from './application-shared/application-shared.module';
import { ApiModule } from './modules/api/api.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export function createTranslateLoader(http: HttpClient) {
	// console.log("system language:"+window.navigator.language);
	// return new TranslateHttpLoader(http, './assets/i18n/', '.json');

	return new MultiTranslateHttpLoader(
		http,
		[
			'./assets/i18n/application/',
			'./assets/i18n/validators/',
			'./assets/i18n/messages/',
			'./assets/i18n/interceptors/',
			'./assets/project/i18n/',
		],
		'.json',
	);
}
@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		SharedModule.forRoot(),
		ApplicationSharedModule.forRoot(),
		InitModule.forRoot(),
		KitModule.forRoot(),
		RestModule.forRoot(),
		KitIonicModule.forRoot(),
		ApiModule.forRoot(),
		// translation
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient],
			},
		}),
		NgxChartsModule,
	],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(translate: TranslateService, environmentLoader: EnvironmentLoaderService) {
		translate.setDefaultLang(environment.default.language);
		translate.use(environment.default.language);
		environmentLoader.setEnviroment(environment);
	}
}
