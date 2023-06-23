import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReadFilePage } from './read-file.page';

describe('ReadFilePage', () => {
	let component: ReadFilePage;
	let fixture: ComponentFixture<ReadFilePage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ReadFilePage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(ReadFilePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
