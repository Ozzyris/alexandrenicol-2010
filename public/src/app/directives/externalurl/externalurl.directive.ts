import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
	selector: 'externalurl'
})

export class ExternalurlDirective {
	@Input() url: any;

	constructor(){}

	@HostListener('click', ['$event'])
	clicked(event: Event) {
		console.log(this.url);
		// this.url = this.url.slice(1, -1);
		window.open(this.url,'_blank');
	}
}