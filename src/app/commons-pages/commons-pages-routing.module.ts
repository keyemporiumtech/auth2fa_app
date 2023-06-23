import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'file/:page',
		loadChildren: () =>
			import('./pages/read-file/read-file.module').then((m) => m.ReadFilePageModule),
	},
	{
		path: 'cookies',
		loadChildren: () => import('./pages/cookies/cookies.module').then((m) => m.CookiesPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CommonsPagesRoutingModule {}
