import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KitModule } from '@ddc/kit';
import { AttachmentService } from './services/attachment.service';
import { ApiModule } from '../api/api.module';
import { MimetypeService } from './services/mimetype.service';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TestResourcesComponent } from './components/test-resources/test-resources.component';
import { TestAttachmentUniqueComponent } from './components/test-resources/test-attachment-unique/test-attachment-unique.component';
import { TestAttachmentPaginateComponent } from './components/test-resources/test-attachment-paginate/test-attachment-paginate.component';
import { TestMimetypeUniqueComponent } from './components/test-resources/test-mimetype-unique/test-mimetype-unique.component';
import { TestMimetypePaginateComponent } from './components/test-resources/test-mimetype-paginate/test-mimetype-paginate.component';
import { IonicModule } from '@ionic/angular';
import { KitIonicModule } from '@ddc/kit-ionic';

@NgModule({
	declarations: [
		TestResourcesComponent,
		TestAttachmentUniqueComponent,
		TestAttachmentPaginateComponent,
		TestMimetypeUniqueComponent,
		TestMimetypePaginateComponent,
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
		TestResourcesComponent,
		TestAttachmentUniqueComponent,
		TestAttachmentPaginateComponent,
		TestMimetypeUniqueComponent,
		TestMimetypePaginateComponent,
	],
})
export class ResourcesModule {
	static forRoot() {
		return {
			ngModule: ResourcesModule,
			providers: [AttachmentService, MimetypeService],
		};
	}
}
