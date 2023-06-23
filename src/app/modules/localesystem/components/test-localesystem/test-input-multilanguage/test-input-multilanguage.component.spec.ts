import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestInputMultilanguageComponent } from './test-input-multilanguage.component';

describe('TestInputMultilanguageComponent', () => {
	let component: TestInputMultilanguageComponent;
	let fixture: ComponentFixture<TestInputMultilanguageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestInputMultilanguageComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestInputMultilanguageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
