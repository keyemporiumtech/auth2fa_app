import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormFieldModel } from '../../../../shared/models/form/form-field.model';
import { MagicValidatorUtil } from '@ddc/kit';
import { EnumFormType } from '../../../../shared/enums/form/form-type.enum';
import { OpenstreetLocationModel } from '@ddc/rest';

@Component({
	selector: 'wiki-test-address-search',
	templateUrl: './test-address-search.component.html',
	styleUrls: ['./test-address-search.component.scss'],
})
export class TestAddressSearchComponent implements OnInit {
	form: FormGroup;
	validations: any = {};
	// AUTOCOMPLETE
	autocomplete1: FormFieldModel;
	lastSelected: OpenstreetLocationModel;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			autocomplete1: new MagicValidatorUtil((this.validations.autocomplete1 = []), undefined)
				.required()
				.build(),
		});

		this.autocomplete1 = new FormFieldModel(
			EnumFormType.SEARCH,
			this.form.get('autocomplete1') as FormControl,
			'Input Autocomplete con emitters',
		)
			.validation([...this.validations.autocomplete1])
			.onInit();
	}

	keepAddress(address: OpenstreetLocationModel) {
		this.lastSelected = address;
	}

	ngOnInit() {}
}
