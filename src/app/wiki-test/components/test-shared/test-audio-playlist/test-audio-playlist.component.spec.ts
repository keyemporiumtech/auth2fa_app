import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestAudioPlaylistComponent } from './test-audio-playlist.component';

describe('TestAudioPlaylistComponent', () => {
	let component: TestAudioPlaylistComponent;
	let fixture: ComponentFixture<TestAudioPlaylistComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TestAudioPlaylistComponent],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(TestAudioPlaylistComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
