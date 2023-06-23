import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeWikiPageRoutingModule } from './home-wiki-routing.module';

import { HomeWikiPage } from './home-wiki.page';
import { SharedModule } from '../../../shared/shared.module';
import { TemplateWikiModule } from '../../template-wiki/template-wiki.module';
import { VersioningComponent } from '../../components/versioning/versioning.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomeWikiPageRoutingModule,
		SharedModule,
		TemplateWikiModule,
	],
	declarations: [HomeWikiPage, VersioningComponent],
})
export class HomeWikiPageModule {}
