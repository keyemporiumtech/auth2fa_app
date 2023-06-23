import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestFormPage } from './test-form.page';

describe('TestFormPage', () => {
	let component: TestFormPage;
	let fixture: ComponentFixture<TestFormPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestFormPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestFormPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
