import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
	selector: 'externalurl'
})

export class ExternalurlDirective {
    @Input() public url: string;

	constructor( private el: ElementRef, private router: Router ){}

	@HostListener('click', ['$event'])
    clicked(event: Event) {
        window.open(this.url,'_blank');
    }
}