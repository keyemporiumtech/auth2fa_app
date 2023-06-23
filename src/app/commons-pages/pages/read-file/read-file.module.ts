import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadFilePageRoutingModule } from './read-file-routing.module';

import { ReadFilePage } from './read-file.page';
import { SharedModule } from '../../../shared/shared.module';
import { KitIonicModule } from '@ddc/kit-ionic';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		ReadFilePageRoutingModule,
		SharedModule,
		KitIonicModule,
	],
	declarations: [ReadFilePage],
})
export class ReadFilePageModule {}
