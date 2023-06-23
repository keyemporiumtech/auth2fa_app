import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestRestPage } from './test-rest.page';

describe('TestRestPage', () => {
	let component: TestRestPage;
	let fixture: ComponentFixture<TestRestPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestRestPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestRestPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
