import { Component, OnInit } from '@angular/core';
import { EnumMessageType, MessageModel, MessageService } from '@ddc/kit';
import { BehaviourMessageModel } from '@ddc/rest';
import { environment } from '../../../../../environments/environment';

@Component({
	selector: 'wiki-test-message-element',
	templateUrl: './test-message-element.component.html',
	styleUrls: ['./test-message-element.component.scss'],
})
export class TestMessageElementComponent implements OnInit {
	EnumMessageType = EnumMessageType;
	idMessageModal: string = '';
	idMessageDiv: string = '';
	constructor(private messageService: MessageService) {
		this.idMessageModal = environment.messages.idMessageModal;
		this.idMessageDiv = environment.messages.idMessageDiv;
	}

	ngOnInit() {}

	// MODAL
	modal(type: EnumMessageType, idMessage: string, code?: number) {
		const message = new MessageModel(
			type,
			code,
			'titolo',
			'testo del messaggio',
			'eccezione del messaggio',
		);
		this.messageService.sendSubjectMessage(message, idMessage);
	}
	behaviourModal(type: EnumMessageType, idMessage: string, code?: number) {
		const message = new MessageModel(
			type,
			code,
			'titolo',
			'testo del messaggio',
			'eccezione del messaggio',
		);
		const behaviour = new BehaviourMessageModel(this.messageService, {
			subject: {
				flg: true,
				idComponent: idMessage,
			},
			routing: undefined,
		});
		behaviour.evalMessage(undefined, message);
	}

	// DIV
	div(type: EnumMessageType, idMessage: string, code?: number) {
		const message = new MessageModel(
			type,
			code,
			'titolo',
			'testo del messaggio',
			'eccezione del messaggio',
		);
		this.messageService.sendSubjectMessage(message, idMessage);
	}
	behaviourDiv(type: EnumMessageType, idMessage?: string, code?: number) {
		const message = new MessageModel(
			type,
			code,
			'titolo',
			'testo del messaggio',
			'eccezione del messaggio',
		);
		const behaviour = new BehaviourMessageModel(this.messageService, {
			subject: {
				flg: true,
				idComponent: idMessage,
			},
			routing: undefined,
		});
		behaviour.evalMessage(undefined, message);
	}
}
