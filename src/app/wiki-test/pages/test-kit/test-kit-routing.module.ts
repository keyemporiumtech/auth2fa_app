import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestKitPage } from './test-kit.page';

const routes: Routes = [
	{
		path: '',
		component: TestKitPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TestKitPageRoutingModule {}
