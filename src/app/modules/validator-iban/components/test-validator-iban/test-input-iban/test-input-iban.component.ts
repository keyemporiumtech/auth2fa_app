import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'wiki-test-input-iban',
	templateUrl: './test-input-iban.component.html',
	styleUrls: ['./test-input-iban.component.scss'],
})
export class TestInputIbanComponent implements OnInit {
	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			myIban: [undefined],
		});
	}

	ngOnInit() {}
}
