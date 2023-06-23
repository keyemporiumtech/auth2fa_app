import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestMessageElementComponent } from './test-message-element.component';

describe('TestMessageElementComponent', () => {
	let component: TestMessageElementComponent;
	let fixture: ComponentFixture<TestMessageElementComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestMessageElementComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestMessageElementComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
