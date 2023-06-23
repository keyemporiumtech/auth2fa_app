import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestSharedPageRoutingModule } from './test-shared-routing.module';

import { TestSharedPage } from './test-shared.page';
import { SharedModule } from '../../../shared/shared.module';
import { TestMessageElementComponent } from '../../components/test-shared/test-message-element/test-message-element.component';
import { KitModule } from '@ddc/kit';
import { RestModule } from '@ddc/rest';
import { TestAudioPlaylistComponent } from '../../components/test-shared/test-audio-playlist/test-audio-playlist.component';
import { TestTableListComponent } from '../../components/test-shared/test-table-list/test-table-list.component';
import { TestAlertComponent } from '../../components/test-shared/test-alert/test-alert.component';
import { TestAddressSearchComponent } from '../../components/test-shared/test-address-search/test-address-search.component';
import { TestMapComponent } from '../../components/test-shared/test-map/test-map.component';

@NgModule({
	imports: [
		CommonModule,
		IonicModule,
		TestSharedPageRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		KitModule,
		RestModule,
		SharedModule,
	],
	declarations: [
		TestSharedPage,
		TestMessageElementComponent,
		TestAudioPlaylistComponent,
		TestTableListComponent,
		TestAlertComponent,
		TestAddressSearchComponent,
		TestMapComponent,
	],
})
export class TestSharedPageModule {}
