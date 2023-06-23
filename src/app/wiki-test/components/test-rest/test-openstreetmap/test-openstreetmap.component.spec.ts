import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestOpenstreetmapComponent } from './test-openstreetmap.component';

describe('TestOpenstreetmapComponent', () => {
	let component: TestOpenstreetmapComponent;
	let fixture: ComponentFixture<TestOpenstreetmapComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestOpenstreetmapComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestOpenstreetmapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
