import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VersioningComponent } from './versioning.component';

describe('VersioningComponent', () => {
	let component: VersioningComponent;
	let fixture: ComponentFixture<VersioningComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VersioningComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(VersioningComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
