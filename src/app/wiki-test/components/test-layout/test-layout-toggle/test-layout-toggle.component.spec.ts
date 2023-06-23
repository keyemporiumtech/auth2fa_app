import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestLayoutToggleComponent } from './test-layout-toggle.component';

describe('TestLayoutToggleComponent', () => {
	let component: TestLayoutToggleComponent;
	let fixture: ComponentFixture<TestLayoutToggleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestLayoutToggleComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestLayoutToggleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
