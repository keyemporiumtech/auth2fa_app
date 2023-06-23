import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestSharedPage } from './test-shared.page';

const routes: Routes = [
	{
		path: '',
		component: TestSharedPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TestSharedPageRoutingModule {}
