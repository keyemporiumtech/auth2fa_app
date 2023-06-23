import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuPublicComponent } from './menu-public.component';

describe('MenuPublicComponent', () => {
	let component: MenuPublicComponent;
	let fixture: ComponentFixture<MenuPublicComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MenuPublicComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(MenuPublicComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
