import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KitModule } from '@ddc/kit';
import { ApiModule } from '../api/api.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { KitIonicModule } from '@ddc/kit-ionic';
import { WorkuserService } from './services/workuser.service';
import { WorkactivityService } from './services/workactivity.service';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		IonicModule,
		HttpClientModule,
		TranslateModule,
		FormsModule,
		ReactiveFormsModule,
		KitModule,
		SharedModule,
		ApiModule,
		KitIonicModule,
	],
	exports: [],
})
export class WorkProfileModule {
	static forRoot() {
		return {
			ngModule: WorkProfileModule,
			providers: [WorkuserService, WorkactivityService],
		};
	}
}
