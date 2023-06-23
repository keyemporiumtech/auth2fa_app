import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppLanguagesComponent } from './app-languages.component';

describe('AppLanguagesComponent', () => {
	let component: AppLanguagesComponent;
	let fixture: ComponentFixture<AppLanguagesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppLanguagesComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(AppLanguagesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
