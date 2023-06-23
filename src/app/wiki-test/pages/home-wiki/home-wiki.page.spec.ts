import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeWikiPage } from './home-wiki.page';

describe('HomeWikiPage', () => {
	let component: HomeWikiPage;
	let fixture: ComponentFixture<HomeWikiPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HomeWikiPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeWikiPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
