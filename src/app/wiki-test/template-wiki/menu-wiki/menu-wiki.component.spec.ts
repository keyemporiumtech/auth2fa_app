import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuWikiComponent } from './menu-wiki.component';

describe('MenuWikiComponent', () => {
	let component: MenuWikiComponent;
	let fixture: ComponentFixture<MenuWikiComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MenuWikiComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(MenuWikiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
