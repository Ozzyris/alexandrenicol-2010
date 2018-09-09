import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
	selector: 'app-le-petit-bateau',
	templateUrl: './le-petit-bateau.component.html',
	styleUrls: ['./le-petit-bateau.component.scss']
})

export class LePetitBateauComponent implements OnInit {

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

	go_to_external_page( page ){
		switch( page ){
			case 'lepetitbateau':
				window.open('http://lepetitbateau.com.au/','_blank');
				break;
			default:
				break;
		}
	}
	
}
