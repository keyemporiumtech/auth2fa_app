import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestCommonsPageComponent } from './test-commons-page.component';

describe('TestCommonsPageComponent', () => {
	let component: TestCommonsPageComponent;
	let fixture: ComponentFixture<TestCommonsPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestCommonsPageComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestCommonsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
