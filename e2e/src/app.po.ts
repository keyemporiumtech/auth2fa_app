import { browser, by, element } from 'protractor';

export class AppPage {
	navigateTo() {
		return browser.get('/');
	}

	getParagraphText() {
		return element(by.css('auth2fa-app-root h1')).getText();
	}
}
