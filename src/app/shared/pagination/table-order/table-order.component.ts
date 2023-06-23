import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationLoggerService, BaseClassModel, StringTranslate } from '@ddc/kit';
import { component } from '../../../../environments/template/component';

@Component({
	selector: 'ddc-app-table-order',
	templateUrl: './table-order.component.html',
	styleUrls: ['./table-order.component.scss'],
})
export class TableOrderComponent extends BaseClassModel {
	@Input() orders: any[]; // devono avere i campi key (nome campo) e value (asc|desc)
	@Input() key: string;
	@Input() label: string | StringTranslate;
	@Output() descEmit: EventEmitter<any> = new EventEmitter<any>();
	@Output() ascEmit: EventEmitter<any> = new EventEmitter<any>();
	iconAsc: string;
	iconDesc: string;

	constructor(applicationLogger: ApplicationLoggerService) {
		super(applicationLogger);
		this.orders = [];
		this.iconAsc = component.pagination.iconOrderAsc;
		this.iconDesc = component.pagination.iconOrderDesc;
	}

	getClassName(): string {
		return 'TableOrderComponent';
	}

	asc() {
		this.ascEmit.emit(true);
	}
	desc() {
		this.descEmit.emit(true);
	}

	existOrder(name: string, type?: 'asc' | 'desc'): boolean {
		return this.orders.findIndex((el) => el.key === name && el.value === type) !== -1
			? true
			: false;
	}
	existOrderByKey(key: string): boolean {
		return this.orders.findIndex((el) => el.key === key) !== -1 ? true : false;
	}

	toggle(key: string) {
		if (this.orders && this.orders.length) {
			if (this.existOrder(key, 'asc')) {
				this.desc();
			} else if (this.existOrder(key, 'desc')) {
				this.asc();
			} else {
				this.asc();
			}
		}
	}
}
