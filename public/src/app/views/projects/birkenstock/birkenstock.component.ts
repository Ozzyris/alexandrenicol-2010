import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
	selector: 'app-birkenstock',
	templateUrl: './birkenstock.component.html',
	styleUrls: ['./birkenstock.component.scss']
})

export class BirkenstockComponent implements OnInit {

	constructor(){}
	ngOnInit(){
		anime.timeline({loop: false})
			.add({
				targets: '.letter',
				translateY: [-100,0],
				easing: "easeOutExpo",
				duration: 1400,
				delay: function(el, i) {
					return 30 * i;
				}
			});
	}
}
