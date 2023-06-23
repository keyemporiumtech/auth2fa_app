import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestIconTitleDirectiveComponent } from './test-icon-title-directive.component';

describe('TestIconTitleDirectiveComponent', () => {
	let component: TestIconTitleDirectiveComponent;
	let fixture: ComponentFixture<TestIconTitleDirectiveComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestIconTitleDirectiveComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestIconTitleDirectiveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
