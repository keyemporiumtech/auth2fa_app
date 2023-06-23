import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TestKiPageRoutingModule } from './test-ki-routing.module';
import { TestKiPage } from './test-ki.page';
import { KitIonicModule } from '@ddc/kit-ionic';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { SharedModule } from '../../../shared/shared.module';
import { TestCommonsPageComponent } from '../../components/test-ki/test-commons-page/test-commons-page.component';
import { TestIconTitleDirectiveComponent } from '../../components/test-ki/test-icon-title-directive/test-icon-title-directive.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TestKiPageRoutingModule,
		KitModule,
		RestModule,
		SharedModule,
		KitIonicModule,
	],
	declarations: [TestKiPage, TestCommonsPageComponent, TestIconTitleDirectiveComponent],
})
export class TestKiPageModule {}
