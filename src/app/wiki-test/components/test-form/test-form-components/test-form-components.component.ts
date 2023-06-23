import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
	ApplicationLoggerService,
	BaseComponent,
	EnumSizeFormat,
	EnumTypeMime,
	FileEmbedModel,
	FileService,
	MagicValidatorUtil,
	OptionListModel,
	TranslateUtility,
} from '@ddc/kit';
import { TranslateService } from '@ngx-translate/core';
import { of, Subscription } from 'rxjs';
import { EnumFormType } from '../../../../shared/enums/form/form-type.enum';
import { FormFieldModel } from '../../../../shared/models/form/form-field.model';

@Component({
	selector: 'wiki-test-form-components',
	templateUrl: './test-form-components.component.html',
	styleUrls: ['./test-form-components.component.scss'],
})
export class TestFormComponentsComponent extends BaseComponent {
	fileService: FileService;
	fb: FormBuilder;
	translate: TranslateService;

	form1: FormGroup;
	validations1: any = {};

	// text
	text1: FormFieldModel;
	textarea1: FormFieldModel;
	textarea2: FormFieldModel;
	email1: FormFieldModel;
	color1: FormFieldModel;
	// FILE
	EnumSizeFormat = EnumSizeFormat;
	showFiles: boolean;
	embedFile: FileEmbedModel;
	subFile: Subscription;
	file1: FormFieldModel;
	file2: FormFieldModel;
	// select
	select1: FormFieldModel;
	select2: FormFieldModel;
	select3: FormFieldModel;
	select4: FormFieldModel;
	optionSingle: OptionListModel[];
	optionList: OptionListModel[];
	optionListHTML: OptionListModel[];
	// checkbox
	checkbox1: FormFieldModel;
	checkbox2: FormFieldModel;
	checkbox3: FormFieldModel;
	// radio
	radio1: FormFieldModel;
	radio2: FormFieldModel;
	radio3: FormFieldModel;
	// autocomplete
	autocomplete1: FormFieldModel;
	searchList: OptionListModel[];
	listAutocomplete1: OptionListModel[];
	optionItem: OptionListModel;
	// number
	number1: FormFieldModel;
	decimal1: FormFieldModel;
	decimal2: FormFieldModel;
	currency1: FormFieldModel;
	// date
	date1: FormFieldModel;
	date2: FormFieldModel;
	date3: FormFieldModel;
	// PHONE
	phone1: FormFieldModel;
	phone2: FormFieldModel;
	optionsPrefix: OptionListModel[];
	optionsPrefixHtml: OptionListModel[];
	// PASSWORD
	password1: FormFieldModel;
	password2: FormFieldModel;

	constructor(
		applicationLogger: ApplicationLoggerService,
		fileService: FileService,
		fb: FormBuilder,
		translate: TranslateService,
	) {
		super(applicationLogger);
		this.fileService = fileService;
		this.fb = fb;
		this.translate = translate;
		this.form1 = this.fb.group({
			text1: new MagicValidatorUtil((this.validations1.text1 = []), undefined).required().build(),
			textarea1: new MagicValidatorUtil((this.validations1.textarea1 = []), undefined)
				.required()
				.build(),
			textarea2: new MagicValidatorUtil((this.validations1.textarea2 = []), undefined)
				.required()
				.build(),
			email1: new MagicValidatorUtil((this.validations1.email1 = []), undefined).required().build(),
			color1: new MagicValidatorUtil((this.validations1.color1 = []), undefined).required().build(),
			file1: new MagicValidatorUtil((this.validations1.file1 = []), undefined).required().build(),
			file2: new MagicValidatorUtil((this.validations1.file2 = []), undefined).required().build(),
			select1: new MagicValidatorUtil((this.validations1.select1 = []), undefined)
				.required()
				.build(),
			select2: new MagicValidatorUtil((this.validations1.select2 = []), undefined)
				.required()
				.build(),
			select3: new MagicValidatorUtil((this.validations1.select3 = []), undefined)
				.required()
				.build(),
			select4: new MagicValidatorUtil((this.validations1.select4 = []), undefined)
				.required()
				.build(),

			checkbox1: new MagicValidatorUtil((this.validations1.checkbox1 = []), undefined)
				.required()
				.build(),
			checkbox2: new MagicValidatorUtil((this.validations1.checkbox2 = []), undefined)
				.required()
				.build(),
			checkbox3: new MagicValidatorUtil((this.validations1.checkbox3 = []), undefined)
				.required()
				.build(),
			radio1: new MagicValidatorUtil((this.validations1.radio1 = []), undefined).required().build(),
			radio2: new MagicValidatorUtil((this.validations1.radio2 = []), undefined).required().build(),
			radio3: new MagicValidatorUtil((this.validations1.radio3 = []), undefined).required().build(),
			autocomplete1: new MagicValidatorUtil((this.validations1.autocomplete1 = []), undefined)
				.required()
				.build(),
			number1: new MagicValidatorUtil((this.validations1.number1 = []), undefined)
				.required()
				.build(),
			decimal1: new MagicValidatorUtil((this.validations1.decimal1 = []), undefined)
				.required()
				.build(),
			decimal2: new MagicValidatorUtil((this.validations1.decimal2 = []), undefined)
				.required()
				.build(),
			currency1: new MagicValidatorUtil((this.validations1.currency1 = []), undefined)
				.required()
				.build(),
			date1: new MagicValidatorUtil((this.validations1.date1 = []), undefined).required().build(),
			date2: new MagicValidatorUtil((this.validations1.date2 = []), undefined).required().build(),
			date3: new MagicValidatorUtil((this.validations1.date3 = []), undefined).required().build(),
			phone1: new MagicValidatorUtil((this.validations1.phone1 = []), undefined).required().build(),
			phone2: new MagicValidatorUtil((this.validations1.phone2 = []), undefined).required().build(),
			password1: new MagicValidatorUtil((this.validations1.password1 = []), undefined)
				.required()
				.build(),
			password2: new MagicValidatorUtil((this.validations1.password2 = []), undefined)
				.required()
				.build(),
		});

		this.initText();
		this.initFile();
		this.initSelects();
		this.initCheckbox();
		this.initRadio();
		this.initAutocomplete();
		this.initNumbers();
		this.initDate();
		this.initPhone();
		this.initPassword();
	}

	ngOnInitForChildren() {}
	ngAfterViewInitForChildren() {}
	ngOnDestroyForChildren() {}
	getClassName(): string {
		return 'TestFormComponentsComponent';
	}

	initText() {
		this.text1 = new FormFieldModel(
			EnumFormType.TEXT,
			this.form1.get('text1') as FormControl,
			'Text semplice',
		)
			.validation(this.validations1.text1)
			.onInit();

		this.textarea1 = new FormFieldModel(
			EnumFormType.TEXTAREA,
			this.form1.get('textarea1') as FormControl,
			'Textarea semplice',
		)
			.validation(this.validations1.textarea1)
			.onInit();

		this.textarea2 = new FormFieldModel(
			EnumFormType.TEXTAREA,
			this.form1.get('textarea2') as FormControl,
			'Textarea con minLength e maxLength',
		)
			.validation(this.validations1.textarea2)
			.onInit();

		this.email1 = new FormFieldModel(
			EnumFormType.EMAIL,
			this.form1.get('email1') as FormControl,
			'Email',
		)
			.validation(this.validations1.email1)
			.onInit();

		this.color1 = new FormFieldModel(
			EnumFormType.COLOR,
			this.form1.get('color1') as FormControl,
			'Color',
		)
			.validation(this.validations1.color1)
			.onInit();
	}

	initFile() {
		this.embedFile = this.fileService.buildFileEmbed(
			'test PDF',
			'application/pdf',
			EnumTypeMime.APPLICATION,
			'pdf',
			undefined,
			'assets/test/pdf/test.pdf',
		);
		this.subFile = this.fileService.setSizeFileEmbedModel(this.embedFile).subscribe((data) => {
			this.embedFile = data;
		});
		this.file1 = new FormFieldModel(
			EnumFormType.FILE,
			this.form1.get('file1') as FormControl,
			'File semplice',
		)
			.validation(this.validations1.file1)
			.onInit();

		this.file2 = new FormFieldModel(
			EnumFormType.FILE,
			this.form1.get('file2') as FormControl,
			'File con validazioni (estensioni pdf, doc e dimensione 1MB)',
		)
			.validation(this.validations1.file2)
			.onInit();
	}

	initSelects() {
		this.optionSingle = [new OptionListModel(1, 'Primo')];
		this.optionList = [
			new OptionListModel(1, 'Primo'),
			new OptionListModel(2, 'Secondo'),
			new OptionListModel(3, 'Terzo'),
		];

		this.optionListHTML = [
			new OptionListModel(
				1,
				'<ion-icon name="person" class="ion-margin-end" slot="start"></ion-icon>Primo',
			),
			new OptionListModel(
				2,
				'<ion-icon name="cog" class="ion-margin-end" slot="start"></ion-icon>Secondo',
			),
			new OptionListModel(
				3,
				'<ion-icon name="create" class="ion-margin-end" slot="start"></ion-icon>Terzo',
			),
		];

		this.select1 = new FormFieldModel(
			EnumFormType.SELECT,
			this.form1.get('select1') as FormControl,
			'Select semplice',
		)
			.validation(this.validations1.select1)
			.onInit();

		this.select2 = new FormFieldModel(
			EnumFormType.SELECT,
			this.form1.get('select2') as FormControl,
			'Select multipla',
		)
			.validation(this.validations1.select2)
			.onInit();

		this.select3 = new FormFieldModel(
			EnumFormType.SELECT_DIV,
			this.form1.get('select3') as FormControl,
			'Select HTML',
		)
			.validation(this.validations1.select3)
			.onInit();

		this.select4 = new FormFieldModel(
			EnumFormType.SELECT_DIV,
			this.form1.get('select4') as FormControl,
			'Select HTML multipla',
		)
			.validation(this.validations1.select4)
			.onInit();
	}

	initCheckbox() {
		this.checkbox1 = new FormFieldModel(
			EnumFormType.CHECKBOX,
			this.form1.get('checkbox1') as FormControl,
			'Checkbox singola',
		)
			.validation(this.validations1.checkbox1)
			.onInit();
		this.checkbox2 = new FormFieldModel(
			EnumFormType.CHECKBOX,
			this.form1.get('checkbox2') as FormControl,
			'Checkbox multipla',
		)
			.validation(this.validations1.checkbox2)
			.onInit();
		this.checkbox3 = new FormFieldModel(
			EnumFormType.CHECKBOX,
			this.form1.get('checkbox3') as FormControl,
			'Checkbox multipla HTML',
		)
			.validation(this.validations1.checkbox3)
			.onInit();
	}

	initRadio() {
		this.radio1 = new FormFieldModel(
			EnumFormType.RADIO,
			this.form1.get('radio1') as FormControl,
			'Radio singola',
		)
			.validation(this.validations1.radio1)
			.onInit();
		this.radio2 = new FormFieldModel(
			EnumFormType.RADIO,
			this.form1.get('radio2') as FormControl,
			'Radio multipla',
		)
			.validation(this.validations1.radio2)
			.onInit();
		this.radio3 = new FormFieldModel(
			EnumFormType.RADIO,
			this.form1.get('radio3') as FormControl,
			'Radio multipla HTML',
		)
			.validation(this.validations1.radio3)
			.onInit();
	}

	initNumbers() {
		this.number1 = new FormFieldModel(
			EnumFormType.NUMBER,
			this.form1.get('number1') as FormControl,
			'Numero con minimo 2 e massimo 6',
		)
			.validation(this.validations1.number1)
			.onInit();
		this.decimal1 = new FormFieldModel(
			EnumFormType.DECIMAL,
			this.form1.get('decimal1') as FormControl,
			'Decimale con minimo 2 e massimo 6',
		)
			.validation(this.validations1.decimal1)
			.onInit();
		this.decimal2 = new FormFieldModel(
			EnumFormType.DECIMAL,
			this.form1.get('decimal2') as FormControl,
			'Decimale con minimo 2,15 e massimo 6,15 e due cifre decimali',
		)
			.validation(this.validations1.decimal2)
			.onInit();
		this.currency1 = new FormFieldModel(
			EnumFormType.CURRENCY,
			this.form1.get('currency1') as FormControl,
			'Currency',
		)
			.validation(this.validations1.currency1)
			.onInit();
	}

	initDate() {
		this.date1 = new FormFieldModel(
			EnumFormType.DATE,
			this.form1.get('date1') as FormControl,
			'Data con minimo e massimo',
		)
			.validation(this.validations1.date1)
			.onInit();
		this.date2 = new FormFieldModel(
			EnumFormType.DATE,
			this.form1.get('date2') as FormControl,
			'Data con time',
		)
			.validation(this.validations1.date2)
			.onInit();
		this.date3 = new FormFieldModel(
			EnumFormType.DATE,
			this.form1.get('date3') as FormControl,
			'Data con time e timezone specifico',
		)
			.validation(this.validations1.date3)
			.onInit();
	}

	initPhone() {
		this.optionsPrefix = [new OptionListModel('+39', '+39'), new OptionListModel('+41', '+41')];
		this.optionsPrefixHtml = [
			new OptionListModel('+39', '<ion-icon name="person" class="ion-margin-end"></ion-icon>+39'),
			new OptionListModel('+41', '<ion-icon name="person" class="ion-margin-end"></ion-icon>+41'),
		];

		this.phone1 = new FormFieldModel(
			EnumFormType.PHONE,
			this.form1.get('phone1') as FormControl,
			'Input Phone',
		)
			.validation([...this.validations1.phone1])
			.onInit();

		this.phone2 = new FormFieldModel(
			EnumFormType.PHONE,
			this.form1.get('phone2') as FormControl,
			'Input Phone con dropdown',
		)
			.validation([...this.validations1.phone2])
			.onInit();
	}

	initPassword() {
		this.password1 = new FormFieldModel(
			EnumFormType.PASSWORD,
			this.form1.get('password1') as FormControl,
			'Input Password',
		)
			.validation([...this.validations1.password1])
			.onInit();

		this.password2 = new FormFieldModel(
			EnumFormType.PASSWORD,
			this.form1.get('password2') as FormControl,
			'Input Password',
		)
			.validation([...this.validations1.password2])
			.onInit();
	}

	initAutocomplete() {
		this.optionItem = new OptionListModel(1, 'primo');
		this.searchList = [
			new OptionListModel(1, 'primo'),
			new OptionListModel(2, 'secondo'),
			new OptionListModel(3, 'terzo'),
			new OptionListModel(4, 'quarto'),
			new OptionListModel(5, 'quinto'),
			new OptionListModel(6, 'sesto'),
			new OptionListModel(7, 'settimo'),
			new OptionListModel(8, 'ottavo'),
			new OptionListModel(9, 'nono'),
		];

		this.listAutocomplete1 = [];

		this.autocomplete1 = new FormFieldModel(
			EnumFormType.SEARCH,
			this.form1.get('autocomplete1') as FormControl,
			'Input Autocomplete con emitters',
		)
			.validation([...this.validations1.autocomplete1])
			.onInit();
	}
	searchAutocomplete(term: string) {
		this.listAutocomplete1 = this.searchList.filter((el) => {
			const desc: string = TranslateUtility.get(el.text, this.translate);
			return desc.startsWith(term);
		});
	}
	selectAutocomplete(item: OptionListModel) {
		alert(
			'hai selezionato il record con chiave ' +
				item.key +
				' e testo ' +
				TranslateUtility.get(item.text, this.translate),
		);
	}
	fnSearchAutocomplete = (term: string) => {
		const list = this.searchList.filter((el) => {
			const desc: string = TranslateUtility.get(el.text, this.translate);
			return desc.startsWith(term);
		});
		return of(list);
	};

	setValue(val: any, name: string) {
		this.form1.get(name).setValue(val);
	}
	resetValue(name: string) {
		this.form1.get(name).reset();
	}
	readValue(name: string) {
		alert(this.form1.get(name).value);
	}
	enableDisable(field: FormFieldModel) {
		if (field.formControl.disabled) {
			field.formControl.enable();
		} else {
			field.formControl.disable();
		}
	}
}
