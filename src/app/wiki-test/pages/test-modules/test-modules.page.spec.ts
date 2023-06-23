import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestModulesPage } from './test-modules.page';

describe('TestModulesPage', () => {
	let component: TestModulesPage;
	let fixture: ComponentFixture<TestModulesPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestModulesPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestModulesPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
