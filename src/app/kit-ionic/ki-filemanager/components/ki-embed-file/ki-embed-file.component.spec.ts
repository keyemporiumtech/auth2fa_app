import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KiEmbedFileComponent } from './ki-embed-file.component';

describe('KiEmbedFileComponent', () => {
	let component: KiEmbedFileComponent;
	let fixture: ComponentFixture<KiEmbedFileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [KiEmbedFileComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(KiEmbedFileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
