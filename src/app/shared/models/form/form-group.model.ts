import { FormFieldPageModel } from './form-field-page.model';
import { FormFieldModel } from './form-field.model';

export class FormGroupModel {
	name: string;
	isRow?: boolean;
	fields?: FormFieldModel[];
	fieldsPage?: FormFieldPageModel[];

	constructor() {
		// super();
		this.fields = [];
		this.fieldsPage = [];
	}

	/**
	 * Costruire un singolo FormGroupModel a partire da un FormFieldPageModel
	 * @param fieldPage FormFieldPageModel
	 * @param col se passato il campo del gruppo assume quella size
	 */
	single(fieldPage: FormFieldPageModel) {
		this.fieldsPage.push(fieldPage);
		this.fields.push(fieldPage.field);
		return this;
	}

	/**
	 * Construisce un FormGroupModel con più FormFieldPageModel contenuti
	 * @param fieldsPage FormFieldPageModel[]
	 * @param col se passato ogni campo del gruppo assume quella size
	 */
	multiple(fieldsPage: FormFieldPageModel[], col?: number) {
		if (this.fieldsPage.length) {
			this.fieldsPage.concat(fieldsPage);
		} else {
			this.fieldsPage = fieldsPage;
		}
		this.isRow = true;
		fieldsPage.forEach((el) => {
			if (col) {
				el.field.sizeIonic = col;
			}
			this.fields.push(el.field);
		});
		return this;
	}

	singleField(field: FormFieldModel) {
		this.fields.push(field);
		return this;
	}

	multipleField(fields: FormFieldModel[], col?: number) {
		this.isRow = true;
		if (this.fields.length) {
			this.fields.concat(fields);
		} else {
			this.fields = fields;
		}
		if (col) {
			this.fields.forEach((el) => {
				el.sizeIonic = col;
			});
		}
		return this;
	}

	hasRow(): boolean {
		return this.fields.find((el) => (el.sizeIonic ? true : false)) ? true : false;
	}
}
