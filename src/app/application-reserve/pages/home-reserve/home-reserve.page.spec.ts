import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeReservePage } from './home-reserve.page';

describe('HomeReservePage', () => {
	let component: HomeReservePage;
	let fixture: ComponentFixture<HomeReservePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeReservePage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeReservePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
