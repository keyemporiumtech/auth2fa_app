import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KiUploadFileComponent } from './ki-upload-file.component';

describe('KiUploadFileComponent', () => {
	let component: KiUploadFileComponent;
	let fixture: ComponentFixture<KiUploadFileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [KiUploadFileComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(KiUploadFileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
