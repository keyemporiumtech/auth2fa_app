import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFormGenericComponent } from './test-form-generic.component';

describe('TestFormGenericComponent', () => {
	let component: TestFormGenericComponent;
	let fixture: ComponentFixture<TestFormGenericComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestFormGenericComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestFormGenericComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
