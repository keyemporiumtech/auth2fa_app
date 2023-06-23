import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'wiki-test-alert',
	templateUrl: './test-alert.component.html',
	styleUrls: ['./test-alert.component.scss'],
})
export class TestAlertComponent implements OnInit {
	inputs: any[];
	buttons: any[];
	result: any;
	constructor() {
		this.inputs = [
			{
				name: 'name1',
				type: 'text',
				placeholder: 'Placeholder 1',
			},
			{
				name: 'name2',
				type: 'text',
				id: 'name2-id',
				value: 'hello',
				placeholder: 'Placeholder 2',
			},
			// multiline input.
			{
				name: 'paragraph',
				id: 'paragraph',
				type: 'textarea',
				placeholder: 'Placeholder 3',
			},
			{
				name: 'name3',
				value: 'http://ionicframework.com',
				type: 'url',
				placeholder: 'Favorite site ever',
			},
			// input date with min & max
			{
				name: 'name4',
				type: 'date',
				min: '2017-03-01',
				max: '2018-01-12',
			},
			// input date without min nor max
			{
				name: 'name5',
				type: 'date',
			},
			{
				name: 'name6',
				type: 'number',
				min: -5,
				max: 10,
			},
			{
				name: 'name7',
				type: 'number',
			},
			{
				name: 'name8',
				type: 'password',
				placeholder: 'Advanced Attributes',
				cssClass: 'specialClass',
				attributes: {
					maxlength: 4,
					inputmode: 'decimal',
				},
			},
		];
		this.buttons = [
			{
				text: 'Button 1',
				cssClass: 'success',
				handler: () => {
					this.result = { message: 'Button 1 clicked' };
				},
			},
			{
				text: 'Button 2',
				cssClass: 'warning',
				handler: () => {
					this.result = { message: 'Button 2 clicked' };
				},
			},
		];
	}

	ngOnInit() {}

	onClose(data: any) {
		this.result = data ? data : { message: 'Nessun dato da mostrare' };
	}

	onOk(data: any) {
		this.result = data ? data : { message: 'Nessun dato da mostrare' };
	}
}
