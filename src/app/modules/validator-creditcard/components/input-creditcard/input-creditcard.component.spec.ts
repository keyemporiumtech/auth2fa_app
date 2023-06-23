import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputCreditcardComponent } from './input-creditcard.component';

describe('InputCreditcardComponent', () => {
	let component: InputCreditcardComponent;
	let fixture: ComponentFixture<InputCreditcardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InputCreditcardComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(InputCreditcardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
