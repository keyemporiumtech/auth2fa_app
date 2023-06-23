import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderReserveComponent } from './header-reserve.component';

describe('HeaderReserveComponent', () => {
	let component: HeaderReserveComponent;
	let fixture: ComponentFixture<HeaderReserveComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderReserveComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderReserveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
