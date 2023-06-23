import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KitModule } from '@ddc/kit';
import { CakeutilsModule } from './cakeutils/cakeutils.module';
import { RestModule } from '@ddc/rest';
import { CakeutilsBeModule } from './cakeutils-be/cakeutils-be.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestApiComponent } from './components/test-api/test-api.component';
import { TestApiUniqueComponent } from './components/test-api/test-api-unique/test-api-unique.component';
import { TestApiPaginateComponent } from './components/test-api/test-api-paginate/test-api-paginate.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
	declarations: [TestApiComponent, TestApiUniqueComponent, TestApiPaginateComponent],
	imports: [
		CommonModule,
		IonicModule,
		HttpClientModule,
		KitModule,
		RestModule,
		SharedModule,
		TranslateModule,
		FormsModule,
		ReactiveFormsModule,
		CakeutilsModule.forRoot(),
		CakeutilsBeModule.forRoot(),
	],
	exports: [
		TestApiComponent,
		TestApiUniqueComponent,
		TestApiPaginateComponent,
		CakeutilsModule,
		CakeutilsBeModule,
	],
})
export class ApiModule {
	static forRoot() {
		return {
			ngModule: ApiModule,
			providers: [],
		};
	}
}
