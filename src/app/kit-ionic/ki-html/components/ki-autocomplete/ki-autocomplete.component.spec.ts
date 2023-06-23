import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KiAutocompleteComponent } from './ki-autocomplete.component';

describe('KiAutocompleteComponent', () => {
	let component: KiAutocompleteComponent;
	let fixture: ComponentFixture<KiAutocompleteComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [KiAutocompleteComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(KiAutocompleteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
