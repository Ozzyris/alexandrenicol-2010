import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

declare var ga:Function;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
	is_menu_active: boolean = false;
	actual_year: number = new Date().getFullYear();
	
	constructor( private router: Router ){}
	ngOnInit(){
		this.router.events.subscribe((event: Event) => {
			if(event instanceof NavigationEnd ){
				this.on_page_change( event )
			}
		});
	}
	scroll_top() { window.scroll(0,0); }
	on_page_change( event ){
		this.is_menu_active = false;
		ga('set', 'page', event.urlAfterRedirects);
		ga('send', 'pageview');
	}
}
