import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestMapComponent } from './test-map.component';

describe('TestMapComponent', () => {
	let component: TestMapComponent;
	let fixture: ComponentFixture<TestMapComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestMapComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestMapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
