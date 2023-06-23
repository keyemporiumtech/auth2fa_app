import { Directive } from '@angular/core';
import { ApplicationLoggerService } from '@ddc/kit';
import { distinctUntilChanged } from 'rxjs/operators';
import { BaseInputComponent } from './base-input.component';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class BaseInputIonicComponent extends BaseInputComponent {
	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
	}

	ngOnInitForChildren() {
		super.ngOnInitForChildren();
		this.manageInfo();
		this.manageMessages();
		this.applySubscription();
		this.applySubscriptionStatus();
	}
	ngAfterViewInitForChildren() {
		this.setAutomaticValidations();
		this.evalUpdateValidations();
	}
	ngOnDestroyForChildren() {
		if (this.subInput) {
			this.subInput.unsubscribe();
		}
		if (this.subStatus) {
			this.subStatus.unsubscribe();
		}
	}

	// subscription
	applySubscription() {
		this.subInput = this.field.formControl.valueChanges
			.pipe(distinctUntilChanged())
			.subscribe((value) => {
				this.behaviourOnSubscribe(value);
				this.emitValueChanged.emit(value);
			});
	}
	behaviourOnSubscribe(value: any) {
		this.manageMessages();
	}

	applySubscriptionStatus() {
		this.subStatus = this.field.formControl.statusChanges
			.pipe(distinctUntilChanged())
			.subscribe((status) => {
				this.behaviourOnSubscribeStatus(status);
				this.emitStatusChanged.emit(status);
			});
	}
	behaviourOnSubscribeStatus(status: any) {
		this.manageMessages();
	}

	evalInputStyles() {
		super.evalInputStyles();
		if (!this.field.cssStyle) {
			this.field.cssStyle = {};
		}
		if (!this.noMargin) {
			// this.field.cssStyle['width'] = '95vw';
			this.field.cssStyle['margin-top'] = '1.5rem';
		}
	}
}
