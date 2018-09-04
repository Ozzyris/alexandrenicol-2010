import { Component, OnInit } from '@angular/core';
// import anime from 'animejs';

@Component({
	selector: 'app-decatlon',
	templateUrl: './decatlon.component.html',
	styleUrls: ['./decatlon.component.scss']
})

export class DecatlonComponent implements OnInit {

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

}
