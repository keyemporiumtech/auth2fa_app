import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestAddressSearchComponent } from './test-address-search.component';

describe('TestAddressSearchComponent', () => {
	let component: TestAddressSearchComponent;
	let fixture: ComponentFixture<TestAddressSearchComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestAddressSearchComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestAddressSearchComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
