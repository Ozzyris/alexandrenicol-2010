import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
	selector: 'app-nexity',
	templateUrl: './nexity.component.html',
	styleUrls: ['./nexity.component.scss']
})

export class NexityComponent implements OnInit {

	constructor(){}
	ngOnInit(){
		window.scrollTo(0, 0);
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

	go_to_external_page( page ){
		switch( page ){
			case 'nexity':
				window.open('https://itunes.apple.com/us/app/alfred-by-nexity/id1062872701?mt=8','_blank');
				break;
			default:
				break;
		}
	}
}
