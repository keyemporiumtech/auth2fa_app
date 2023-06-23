import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestLayoutButtonsComponent } from './test-layout-buttons.component';

describe('TestLayoutButtonsComponent', () => {
	let component: TestLayoutButtonsComponent;
	let fixture: ComponentFixture<TestLayoutButtonsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestLayoutButtonsComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestLayoutButtonsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
