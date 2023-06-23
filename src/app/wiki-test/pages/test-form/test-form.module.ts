import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestFormPageRoutingModule } from './test-form-routing.module';

import { TestFormPage } from './test-form.page';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { SharedModule } from '../../../shared/shared.module';
import { TestFormComponentsComponent } from '../../components/test-form/test-form-components/test-form-components.component';
import { TranslateModule } from '@ngx-translate/core';
import { TestFormGenericComponent } from '../../components/test-form/test-form-generic/test-form-generic.component';
import { TestFormPageComponent } from '../../components/test-form/test-form-page/test-form-page.component';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		TranslateModule,
		TestFormPageRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		KitModule,
		RestModule,
		SharedModule,
	],
	declarations: [
		TestFormPage,
		TestFormComponentsComponent,
		TestFormGenericComponent,
		TestFormPageComponent,
	],
})
export class TestFormPageModule {}
