import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestKitPage } from './test-kit.page';

describe('TestKitPage', () => {
	let component: TestKitPage;
	let fixture: ComponentFixture<TestKitPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestKitPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestKitPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
