import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestKiPage } from './test-ki.page';

const routes: Routes = [
	{
		path: '',
		component: TestKiPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TestKiPageRoutingModule {}
