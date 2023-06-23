import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { KiFilemanagerModule } from './ki-filemanager/ki-filemanager.module';
import { KiHtmlModule } from './ki-html/ki-html.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		IonicModule,
		KitModule,
		RestModule,
		KiFilemanagerModule.forRoot(),
		KiHtmlModule.forRoot(),
	],
	exports: [KiFilemanagerModule, KiHtmlModule],
})
export class KitIonicModule {
	static forRoot() {
		return {
			ngModule: KitIonicModule,
		};
	}
}
