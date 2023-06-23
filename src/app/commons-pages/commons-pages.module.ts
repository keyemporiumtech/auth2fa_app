import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsPagesRoutingModule } from './commons-pages-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
	declarations: [],
	imports: [CommonModule, IonicModule, CommonsPagesRoutingModule],
})
export class CommonsPagesModule {
	static forRoot() {
		return {
			ngModule: CommonsPagesModule,
			providers: [],
		};
	}
}
