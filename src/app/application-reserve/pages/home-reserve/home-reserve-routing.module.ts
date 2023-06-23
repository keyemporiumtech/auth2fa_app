import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeReservePage } from './home-reserve.page';

const routes: Routes = [
	{
		path: '',
		component: HomeReservePage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeReservePageRoutingModule {}
