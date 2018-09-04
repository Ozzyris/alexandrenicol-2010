import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

declare var ga:Function;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
	is_menu_active: boolean = false;
	actual_year: number = new Date().getFullYear();

	constructor( private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title ){}
	ngOnInit(){
		this.router.events
			.filter((event) => event instanceof NavigationEnd)
			.map(() => this.activatedRoute)
			.map((route) => {
				while (route.firstChild) route = route.firstChild;
				return route;
			})
			.filter((route) => route.outlet === 'primary')
			.mergeMap((route) => route.data)
			.subscribe((event) => this.on_page_change( event ));

	}

	on_page_change( event ){
		this.titleService.setTitle(event['title']);
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
