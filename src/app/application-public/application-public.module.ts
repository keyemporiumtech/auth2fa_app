import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EnvironmentLoaderService } from '@ddc/kit';
import { environment } from '../../environments/environment';
import { HomePublicPageModule } from './pages/home-public/home-public.module';

@NgModule({
	declarations: [],
	imports: [IonicModule, CommonModule, HomePublicPageModule],
})
export class ApplicationPublicModule {
	constructor(environmentLoader: EnvironmentLoaderService) {
		environmentLoader.setEnviroment(environment);
	}
	static forRoot() {
		return {
			ngModule: ApplicationPublicModule,
			providers: [],
		};
	}
}
