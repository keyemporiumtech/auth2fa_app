import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestLayoutPageRoutingModule } from './test-layout-routing.module';

import { TestLayoutPage } from './test-layout.page';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { SharedModule } from '../../../shared/shared.module';
import { TestLayoutColorsComponent } from '../../components/test-layout/test-layout-colors/test-layout-colors.component';
import { TestLayoutButtonsComponent } from '../../components/test-layout/test-layout-buttons/test-layout-buttons.component';
import { TestLayoutToggleComponent } from '../../components/test-layout/test-layout-toggle/test-layout-toggle.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TestLayoutPageRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		KitModule,
		RestModule,
		SharedModule,
	],
	declarations: [
		TestLayoutPage,
		TestLayoutColorsComponent,
		TestLayoutButtonsComponent,
		TestLayoutToggleComponent,
	],
})
export class TestLayoutPageModule {}
