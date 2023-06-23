import { Component, Directive, ElementRef, Input, ViewChild } from '@angular/core';
import { BaseComponent, ApplicationLoggerService, StringTranslate } from '@ddc/kit';
import { EnumNativeAudio } from '../../enums/native-audio.enum';
import { EnumStatusMedia } from '../../enums/status-media.enum';

import { Plugins } from '@capacitor/core';

const { NativeAudio } = Plugins;
@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class EmbedAudioNativeComponent extends BaseComponent {
	@Input() path: string = '';
	@Input() title: string | StringTranslate;
	@Input() description: string | StringTranslate;
	@Input() initVolume: number = 0.6;
	// attributes
	@Input() autoplay: boolean;
	@Input() controls: boolean = true;
	@Input() loop: boolean;
	@Input() muted: boolean;
	@Input() preload: EnumNativeAudio;
	// inner
	status: EnumStatusMedia;
	currentVolume: number;
	storedVolume: number;
	errors: string[];

	nativeAudio;

	constructor(applicationLoggerService: ApplicationLoggerService) {
		super(applicationLoggerService);
		this.errors = [];
		this.nativeAudio = NativeAudio;
	}
	ngOnInitForChildren() {
		this.init();
	}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {}
	getClassName(): string {
		return 'EmbedAudioComponent';
	}

	play() {
		const $promise = this.loop ? this.nativeAudio.loop(this.id) : this.nativeAudio.play(this.id);
		$promise.then(
			(res) => {
				this.status = EnumStatusMedia.PLAYING;
			},
			(err) => {
				this.status = EnumStatusMedia.ON_ERROR;
			},
		);
	}

	volume(value: number) {
		this.nativeAudio.setVolumeForComplexAsset(this.id, value).then(
			(res) => {
				this.currentVolume = value;
			},
			(err) => {
				this.status = EnumStatusMedia.ON_ERROR;
			},
		);
	}

	stop() {
		this.nativeAudio.stop(this.id).then(
			(res) => {
				this.status = EnumStatusMedia.STOPPED;
			},
			(err) => {
				this.status = EnumStatusMedia.ON_ERROR;
			},
		);
	}

	mute() {
		if (this.status !== EnumStatusMedia.MUTED) {
			this.storedVolume = this.currentVolume;
			this.volume(0);
		} else {
			this.volume(this.storedVolume);
			this.storedVolume = undefined;
		}
	}

	private load() {
		return this.preload === EnumNativeAudio.COMPLEX
			? this.nativeAudio.preloadComplex(this.id, this.path, 1, 1, 0)
			: this.nativeAudio.preloadSimple(this.id, this.path);
	}

	private init() {
		this.status = EnumStatusMedia.TO_LOAD;

		this.load().then(
			(res) => {
				this.status = EnumStatusMedia.LOADED;
				this.volume(this.muted ? 0 : this.initVolume);
				if (this.autoplay) {
					this.play();
				}
			},
			(err) => {
				this.status = EnumStatusMedia.ON_ERROR;
			},
		);
	}
}
