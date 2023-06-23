import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestKitHtmlComponent } from './test-kit-html.component';

describe('TestKitHtmlComponent', () => {
	let component: TestKitHtmlComponent;
	let fixture: ComponentFixture<TestKitHtmlComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestKitHtmlComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestKitHtmlComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
