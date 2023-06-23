import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputMultilanguageComponent } from './input-multilanguage.component';

describe('InputMultilanguageComponent', () => {
	let component: InputMultilanguageComponent;
	let fixture: ComponentFixture<InputMultilanguageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InputMultilanguageComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(InputMultilanguageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
