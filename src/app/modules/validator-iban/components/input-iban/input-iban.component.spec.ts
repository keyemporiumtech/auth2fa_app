import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputIbanComponent } from './input-iban.component';

describe('InputIbanComponent', () => {
	let component: InputIbanComponent;
	let fixture: ComponentFixture<InputIbanComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InputIbanComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(InputIbanComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
