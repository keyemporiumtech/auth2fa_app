import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestKiPage } from './test-ki.page';

describe('TestKiPage', () => {
	let component: TestKiPage;
	let fixture: ComponentFixture<TestKiPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestKiPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestKiPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
