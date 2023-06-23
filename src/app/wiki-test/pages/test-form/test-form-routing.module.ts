import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestFormPage } from './test-form.page';

const routes: Routes = [
	{
		path: '',
		component: TestFormPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TestFormPageRoutingModule {}
