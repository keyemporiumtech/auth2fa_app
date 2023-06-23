import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileUploadModule } from 'ng2-file-upload';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { KiFileService } from './services/ki-file.service';
import { KiEmbedFileComponent } from './components/ki-embed-file/ki-embed-file.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitModule } from '@ddc/kit';
import { KiUploadFileComponent } from './components/ki-upload-file/ki-upload-file.component';

@NgModule({
	declarations: [KiEmbedFileComponent, KiUploadFileComponent],
	imports: [
		CommonModule,
		IonicModule,
		TranslateModule,
		KitModule,
		// forms
		FormsModule,
		ReactiveFormsModule,
		// others
		PdfViewerModule,
		FileUploadModule,
	],
	exports: [KiEmbedFileComponent, KiUploadFileComponent],
})
export class KiFilemanagerModule {
	static forRoot() {
		return {
			ngModule: KiFilemanagerModule,
			providers: [KiFileService], // NativeAudio --not-working
		};
	}
}
