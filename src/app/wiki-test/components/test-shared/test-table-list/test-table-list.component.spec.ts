import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestTableListComponent } from './test-table-list.component';

describe('TestTableListComponent', () => {
	let component: TestTableListComponent;
	let fixture: ComponentFixture<TestTableListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestTableListComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestTableListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
