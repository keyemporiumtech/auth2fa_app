import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderWikiComponent } from './header-wiki.component';

describe('HeaderWikiComponent', () => {
	let component: HeaderWikiComponent;
	let fixture: ComponentFixture<HeaderWikiComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [HeaderWikiComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderWikiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
