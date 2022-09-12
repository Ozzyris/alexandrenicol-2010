import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	is_error: any = [];
	today_date: any = new Date().getFullYear() + '-01-01';

	constructor(){}
	ngOnInit(): void {}
}
