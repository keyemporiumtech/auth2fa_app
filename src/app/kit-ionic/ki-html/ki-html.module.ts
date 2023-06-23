import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FileUploadModule } from 'ng2-file-upload';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KitModule } from '@ddc/kit';
import { DdcInputPasswordDirective } from './directives/ddc-input-password.directive';
import { KiAutocompleteComponent } from './components/ki-autocomplete/ki-autocomplete.component';
import { DdcIconTitleDirective } from './directives/ddc-icon-title.directive';

@NgModule({
	declarations: [DdcInputPasswordDirective, DdcIconTitleDirective, KiAutocompleteComponent],
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
	exports: [DdcInputPasswordDirective, DdcIconTitleDirective, KiAutocompleteComponent],
})
export class KiHtmlModule {
	static forRoot() {
		return {
			ngModule: KiHtmlModule,
			providers: [],
		};
	}
}
