import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePublicPageRoutingModule } from './home-public-routing.module';

import { HomePublicPage } from './home-public.page';
import { TemplatePublicModule } from '../../template-public/template-public.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePublicPageRoutingModule,
		TemplatePublicModule,
	],
	declarations: [HomePublicPage],
})
export class HomePublicPageModule {}
