import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'wiki-menu-wiki',
	templateUrl: './menu-wiki.component.html',
	styleUrls: ['./menu-wiki.component.scss'],
})
export class MenuWikiComponent implements OnInit {
	view: string;
	constructor(private router: Router) {}

	ngOnInit() {}

	set(view: string) {
		this.view = view;
	}

	go(view: string) {
		this.router.navigate([view]);
	}
}
