import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WikiTestRoutingModule } from './wiki-test-routing.module';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { SharedModule } from '../shared/shared.module';
import { KitIonicModule } from '@ddc/kit-ionic';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	imports: [
		IonicModule,
		CommonModule,
		TranslateModule,
		WikiTestRoutingModule,
		KitModule,
		RestModule,
		KitIonicModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class WikiTestModule {}
