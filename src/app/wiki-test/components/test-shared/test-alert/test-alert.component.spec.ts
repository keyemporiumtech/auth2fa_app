import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestAlertComponent } from './test-alert.component';

describe('TestAlertComponent', () => {
	let component: TestAlertComponent;
	let fixture: ComponentFixture<TestAlertComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestAlertComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestAlertComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
