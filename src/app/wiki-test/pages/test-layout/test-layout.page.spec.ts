import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestLayoutPage } from './test-layout.page';

describe('TestLayoutPage', () => {
	let component: TestLayoutPage;
	let fixture: ComponentFixture<TestLayoutPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestLayoutPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestLayoutPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
