import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestModulesPageRoutingModule } from './test-modules-routing.module';

import { TestModulesPage } from './test-modules.page';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { SharedModule } from '../../../shared/shared.module';
// api
import { ApiModule } from '../../../modules/api/api.module';
import { ResourcesModule } from '../../../modules/resources/resources.module';
import { CommunicationModule } from '../../../modules/communication/communication.module';
import { AuthenticationModule } from '../../../modules/authentication/authentication.module';
import { LocalesystemModule } from '../../../modules/localesystem/localesystem.module';
import { ValidatorIbanModule } from '../../../modules/validator-iban/validator-iban.module';
import { ValidatorCreditcardModule } from '../../../modules/validator-creditcard/validator-creditcard.module';
import { ValidatorPasswordModule } from '../../../modules/validator-password/validator-password.module';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		TestModulesPageRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		KitModule,
		RestModule,
		SharedModule,
		ApiModule,
		ResourcesModule.forRoot(),
		CommunicationModule.forRoot(),
		AuthenticationModule.forRoot(),
		LocalesystemModule.forRoot(),
		ValidatorIbanModule.forRoot(),
		ValidatorCreditcardModule.forRoot(),
		ValidatorPasswordModule.forRoot(),
	],
	declarations: [TestModulesPage],
})
export class TestModulesPageModule {}
