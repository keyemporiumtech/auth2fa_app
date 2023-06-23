import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputSelectHtmlComponent } from './input-select-html.component';

describe('InputSelectHtmlComponent', () => {
	let component: InputSelectHtmlComponent;
	let fixture: ComponentFixture<InputSelectHtmlComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InputSelectHtmlComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(InputSelectHtmlComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
