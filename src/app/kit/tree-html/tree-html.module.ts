import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	exports: [],
})
export class TreeHtmlModule {
	static forRoot() {
		return {
			ngModule: TreeHtmlModule,
			providers: [],
		};
	}
}
