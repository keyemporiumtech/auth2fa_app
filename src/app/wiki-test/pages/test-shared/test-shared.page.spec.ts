import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestSharedPage } from './test-shared.page';

describe('TestSharedPage', () => {
	let component: TestSharedPage;
	let fixture: ComponentFixture<TestSharedPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestSharedPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestSharedPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
