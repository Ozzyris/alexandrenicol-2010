import { Component, OnInit } from '@angular/core';
// import anime from 'animejs';

@Component({
	selector: 'app-birkenstock',
	templateUrl: './birkenstock.component.html',
	styleUrls: ['./birkenstock.component.scss']
})

export class BirkenstockComponent implements OnInit {

	constructor(){}
	ngOnInit(){
		window.scrollTo(0, 0);
		// anime.timeline({loop: false})
		// 	.add({
		// 		targets: '.letter',
		// 		translateY: [-100,0],
		// 		easing: "easeOutExpo",
		// 		duration: 1400,
		// 		delay: function(el, i) {
		// 			return 30 * i;
		// 		}
		// 	});
	}

	go_to_external_page( page ){
		switch( page ){
			case 'birkenstock':
				window.open('http://www.birkenstockbondibeach.com.au/','_blank');
				break;
			default:
				break;
		}
	}

}
