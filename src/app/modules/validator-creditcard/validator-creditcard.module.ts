import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitModule } from '@ddc/kit';
import { SharedModule } from '../../shared/shared.module';
import { ApiModule } from '../api/api.module';
import { IonicModule } from '@ionic/angular';
import { KitIonicModule } from '@ddc/kit-ionic';
import { CreditcardService } from './services/creditcard.service';
import { InputCreditcardComponent } from './components/input-creditcard/input-creditcard.component';
import { TestValidatorCreditcardComponent } from './components/test-validator-creditcard/test-validator-creditcard.component';
import { TestInputCreditcardComponent } from './components/test-validator-creditcard/test-input-creditcard/test-input-creditcard.component';

@NgModule({
	declarations: [
		InputCreditcardComponent,
		TestValidatorCreditcardComponent,
		TestInputCreditcardComponent,
	],
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
	exports: [
		InputCreditcardComponent,
		TestValidatorCreditcardComponent,
		TestInputCreditcardComponent,
	],
})
export class ValidatorCreditcardModule {
	static forRoot() {
		return {
			ngModule: ValidatorCreditcardModule,
			providers: [CreditcardService],
		};
	}
}
