import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestLayoutPage } from './test-layout.page';

const routes: Routes = [
	{
		path: '',
		component: TestLayoutPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TestLayoutPageRoutingModule {}
