import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EnvironmentLoaderService } from '@ddc/kit';
import { environment } from '../../environments/environment';
import { HomeReservePageModule } from './pages/home-reserve/home-reserve.module';

@NgModule({
	declarations: [],
	imports: [IonicModule, CommonModule, HomeReservePageModule],
})
export class ApplicationReserveModule {
	constructor(environmentLoader: EnvironmentLoaderService) {
		environmentLoader.setEnviroment(environment);
	}
	static forRoot() {
		return {
			ngModule: ApplicationReserveModule,
			providers: [],
		};
	}
}
