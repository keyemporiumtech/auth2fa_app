import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestKitPageRoutingModule } from './test-kit-routing.module';

import { TestKitPage } from './test-kit.page';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { SharedModule } from '../../../shared/shared.module';
import { TestKitHtmlComponent } from '../../components/test-kit/test-kit-html/test-kit-html.component';
import { TestKitChartsComponent } from '../../components/test-kit/test-kit-charts/test-kit-charts.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TestKitPageRoutingModule,
		KitModule,
		RestModule,
		SharedModule,
	],
	declarations: [TestKitPage, TestKitHtmlComponent, TestKitChartsComponent],
})
export class TestKitPageModule {}
