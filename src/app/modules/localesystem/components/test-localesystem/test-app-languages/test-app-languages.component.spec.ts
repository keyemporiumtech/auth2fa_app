import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestAppLanguagesComponent } from './test-app-languages.component';

describe('TestAppLanguagesComponent', () => {
	let component: TestAppLanguagesComponent;
	let fixture: ComponentFixture<TestAppLanguagesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestAppLanguagesComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestAppLanguagesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
