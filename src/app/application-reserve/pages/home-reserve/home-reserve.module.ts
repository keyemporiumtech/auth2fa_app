import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeReservePageRoutingModule } from './home-reserve-routing.module';

import { HomeReservePage } from './home-reserve.page';
import { TemplateReserveModule } from '../../template-reserve/template-reserve.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomeReservePageRoutingModule,
		TemplateReserveModule,
	],
	declarations: [HomeReservePage],
})
export class HomeReservePageModule {}
