import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestRestPageRoutingModule } from './test-rest-routing.module';

import { TestRestPage } from './test-rest.page';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { SharedModule } from '../../../shared/shared.module';
import { KitIonicModule } from '@ddc/kit-ionic';
import { TestOpenstreetmapComponent } from '../../components/test-rest/test-openstreetmap/test-openstreetmap.component';
import { TestRestOauthLoginComponent } from '../../components/test-rest/test-rest-oauth-login/test-rest-oauth-login.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		TestRestPageRoutingModule,
		KitModule,
		RestModule,
		SharedModule,
		KitIonicModule,
	],
	declarations: [TestRestPage, TestOpenstreetmapComponent, TestRestOauthLoginComponent],
})
export class TestRestPageModule {}
