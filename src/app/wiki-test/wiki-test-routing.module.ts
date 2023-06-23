import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/home-wiki/home-wiki.module').then((m) => m.HomeWikiPageModule),
	},
	{
		path: 'shared',
		loadChildren: () =>
			import('./pages/test-shared/test-shared.module').then((m) => m.TestSharedPageModule),
	},
	{
		path: 'ki',
		loadChildren: () => import('./pages/test-ki/test-ki.module').then((m) => m.TestKiPageModule),
	},
	{
		path: 'layout',
		loadChildren: () =>
			import('./pages/test-layout/test-layout.module').then((m) => m.TestLayoutPageModule),
	},
	{
		path: 'form',
		loadChildren: () =>
			import('./pages/test-form/test-form.module').then((m) => m.TestFormPageModule),
	},
	{
		path: 'modules',
		loadChildren: () =>
			import('./pages/test-modules/test-modules.module').then((m) => m.TestModulesPageModule),
	},
	{
		path: 'rest',
		loadChildren: () =>
			import('./pages/test-rest/test-rest.module').then((m) => m.TestRestPageModule),
	},
	{
		path: 'kit',
		loadChildren: () => import('./pages/test-kit/test-kit.module').then((m) => m.TestKitPageModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WikiTestRoutingModule {}
