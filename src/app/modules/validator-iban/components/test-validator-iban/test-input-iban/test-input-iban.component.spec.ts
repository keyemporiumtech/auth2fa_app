import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestInputIbanComponent } from './test-input-iban.component';

describe('TestInputIbanComponent', () => {
	let component: TestInputIbanComponent;
	let fixture: ComponentFixture<TestInputIbanComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestInputIbanComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestInputIbanComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
