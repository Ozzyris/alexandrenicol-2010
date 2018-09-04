import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
	selector: 'app-carrott',
	templateUrl: './carrott.component.html',
	styleUrls: ['./carrott.component.scss']
})

export class CarrottComponent implements OnInit {
	
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
			case 'ios':
				window.open('https://itunes.apple.com/au/app/carrott/id1276475292?ls=1&mt=8','_blank');
				break;
			case 'android':
				window.open('https://play.google.com/store/apps/details?id=com.carrottslc.carrott','_blank');
				break;
			default:
				break;
		}
	}

}
