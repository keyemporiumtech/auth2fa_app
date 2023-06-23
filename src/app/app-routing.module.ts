import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadAppComponent } from './init/components/load-app/load-app.component';

const routes: Routes = [
	{
		path: '',
		component: LoadAppComponent,
		children: [
			{
				path: '',
				redirectTo: 'app',
				pathMatch: 'full',
			},
			{
				path: 'base',
				loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
			},
			{
				path: 'app',
				loadChildren: () =>
					import('./application-public/application-public.module').then(
						(m) => m.ApplicationPublicModule,
					),
			},
			{
				path: 'reserve',
				loadChildren: () =>
					import('./application-reserve/application-reserve.module').then(
						(m) => m.ApplicationReserveModule,
					),
			},
			{
				path: 'commons',
				loadChildren: () =>
					import('./commons-pages/commons-pages.module').then((m) => m.CommonsPagesModule),
			},
			{
				path: 'wiki',
				loadChildren: () => import('./wiki-test/wiki-test.module').then((m) => m.WikiTestModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
