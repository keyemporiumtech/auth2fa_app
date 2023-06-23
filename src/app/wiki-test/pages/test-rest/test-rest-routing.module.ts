import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestRestPage } from './test-rest.page';

const routes: Routes = [
	{
		path: '',
		component: TestRestPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TestRestPageRoutingModule {}
