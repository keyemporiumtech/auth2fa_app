import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderPublicComponent } from './header-public.component';

describe('HeaderPublicComponent', () => {
	let component: HeaderPublicComponent;
	let fixture: ComponentFixture<HeaderPublicComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderPublicComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderPublicComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
