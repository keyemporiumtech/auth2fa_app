import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestValidatorCreditcardComponent } from './test-validator-creditcard.component';

describe('TestValidatorCreditcardComponent', () => {
	let component: TestValidatorCreditcardComponent;
	let fixture: ComponentFixture<TestValidatorCreditcardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestValidatorCreditcardComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestValidatorCreditcardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
