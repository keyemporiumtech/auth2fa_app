import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeWikiPage } from './home-wiki.page';

const routes: Routes = [
	{
		path: '',
		component: HomeWikiPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeWikiPageRoutingModule {}
