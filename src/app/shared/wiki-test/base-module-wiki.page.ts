import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteNavigationUtility } from '@ddc/kit';
import { MenuUtility } from '../utility/menu.utility';
import { MenuController } from '@ionic/angular';

export class BaseModuleWikiPage {
	subQueryParamsMap: Subscription;
	router: Router;
	activatedRoute: ActivatedRoute;
	menuController: MenuController;

	constructor(router: Router, activatedRoute: ActivatedRoute, menuController: MenuController) {
		this.router = router;
		this.activatedRoute = activatedRoute;
		this.menuController = menuController;
		const routeManager = new RouteNavigationUtility(router, activatedRoute);

		this.subQueryParamsMap = routeManager.waitQueryParamMap().subscribe((res) => {
			if (res && res.get('view')) {
				this.set(res.get('view'));
			}
		});
	}
	view: any;

	set(view: string) {
		this.view = view;
	}
	unset() {
		this.view = undefined;
	}

	setAndCloseMenu(view: string, menuId: string) {
		this.set(view);
		MenuUtility.close(this.menuController, menuId);
	}

	home() {
		this.router.navigate(['wiki']);
	}
}
