import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterWikiComponent } from './footer-wiki.component';

describe('FooterWikiComponent', () => {
	let component: FooterWikiComponent;
	let fixture: ComponentFixture<FooterWikiComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [FooterWikiComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(FooterWikiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
