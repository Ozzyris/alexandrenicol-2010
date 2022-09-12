import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	is_menu_active: boolean = false;
	actual_year: number = new Date().getFullYear();

	scroll_top() { window.scroll(0,0); }
}
