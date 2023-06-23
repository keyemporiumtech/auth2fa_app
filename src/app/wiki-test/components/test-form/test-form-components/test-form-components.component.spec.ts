import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFormComponentsComponent } from './test-form-components.component';

describe('TestFormComponentsComponent', () => {
	let component: TestFormComponentsComponent;
	let fixture: ComponentFixture<TestFormComponentsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestFormComponentsComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestFormComponentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
