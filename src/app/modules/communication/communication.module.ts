/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KitModule } from '@ddc/kit';
import { ApiModule } from '../api/api.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MailService } from './services/mail.service';
import { MailreceiverService } from './services/mailreceiver.service';
import { MailattachmentService } from './services/mailattachment.service';
import { MailcidService } from './services/mailcid.service';
import { MailerService } from './services/mailer.service';
import { PhoneService } from './services/phone.service';
import { PhonereceiverService } from './services/phonereceiver.service';
import { IonicModule } from '@ionic/angular';
import { TestCommunicationComponent } from './components/test-communication/test-communication.component';
import { TestMailUniqueComponent } from './components/test-communication/test-mail-unique/test-mail-unique.component';
import { TestMailPaginateComponent } from './components/test-communication/test-mail-paginate/test-mail-paginate.component';

@NgModule({
	declarations: [TestCommunicationComponent, TestMailUniqueComponent, TestMailPaginateComponent],
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
	],
	exports: [TestCommunicationComponent, TestMailUniqueComponent, TestMailPaginateComponent],
})
export class CommunicationModule {
	static forRoot() {
		return {
			ngModule: CommunicationModule,
			providers: [
				MailService,
				MailreceiverService,
				MailattachmentService,
				MailcidService,
				MailerService,
				PhoneService,
				PhonereceiverService,
			],
		};
	}
}
