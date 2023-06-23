import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
	let component: InputTextComponent;
	let fixture: ComponentFixture<InputTextComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InputTextComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(InputTextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
