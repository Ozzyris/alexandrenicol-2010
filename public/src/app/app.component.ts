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

	go_to_external_page( page ){
		switch( page ){
			case 'github':
				window.open('https://github.com/Ozzyris','_blank');
				break;
			case 'linkedin':
				window.open('https://www.linkedin.com/in/alexandrenicol','_blank');
				break;
			case 'behance':
				window.open('https://www.behance.net/Alex_Nicol','_blank');
				break;
			case 'twitter':
				window.open('https://twitter.com/Alx_Nicol','_blank');
				break;
			default:
				break;
		}
	}
}
