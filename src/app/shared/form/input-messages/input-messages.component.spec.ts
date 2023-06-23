import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputMessagesComponent } from './input-messages.component';

describe('InputMessagesComponent', () => {
	let component: InputMessagesComponent;
	let fixture: ComponentFixture<InputMessagesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InputMessagesComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(InputMessagesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
