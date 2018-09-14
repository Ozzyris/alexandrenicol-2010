import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
	selector: 'externalurl'
})

export class ExternalurlDirective {
    @Input()
    public url: string;


	constructor( private el: ElementRef, private router: Router ){}

	@HostListener('click', ['$event'])
    clicked(event: Event) {

        // console.log(`Values: ${this.url}`);
        console.log(event);

 //        // const url = this.el.nativeElement.href;


 //        // if (isNil(url)) {
 //        //     return;
 //        // }

 //        // window.open('http://lepetitbateau.com.au/','_blank');
 //        // window.open(url,'_blank');
 //        // this.router.navigate(['/externalRedirect', { externalUrl: url }], {
 //        //     skipLocationChange: true,
 //        // });

 //        // event.preventDefault();
    }
}