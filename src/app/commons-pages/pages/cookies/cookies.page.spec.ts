import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CookiesPage } from './cookies.page';

describe('CookiesPage', () => {
	let component: CookiesPage;
	let fixture: ComponentFixture<CookiesPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CookiesPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(CookiesPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
