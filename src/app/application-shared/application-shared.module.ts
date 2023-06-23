import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentLoaderService } from '@ddc/kit';
import { environment } from '../../environments/environment';
import { IonicModule } from '@ionic/angular';

@NgModule({
	declarations: [],
	imports: [IonicModule, CommonModule],
})
export class ApplicationSharedModule {
	constructor(environmentLoader: EnvironmentLoaderService) {
		environmentLoader.setEnviroment(environment);
	}
	static forRoot() {
		return {
			ngModule: ApplicationSharedModule,
			providers: [],
		};
	}
}
