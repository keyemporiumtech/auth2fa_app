import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePublicPage } from './home-public.page';

describe('HomePublicPage', () => {
	let component: HomePublicPage;
	let fixture: ComponentFixture<HomePublicPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomePublicPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(HomePublicPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
