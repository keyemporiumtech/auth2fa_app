import { MenuController } from '@ionic/angular';

export class MenuUtility {
	static open(menu: MenuController, id: string) {
		menu.enable(true, id);
		menu.open(id);
	}
	static close(menu: MenuController, id: string) {
		menu.close(id);
	}
}
