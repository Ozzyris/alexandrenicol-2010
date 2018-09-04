import { Component, OnInit } from '@angular/core';
// import anime from 'animejs';

@Component({
	selector: 'app-experience-digital',
	templateUrl: './experience-digital.component.html',
	styleUrls: ['./experience-digital.component.scss']
})

export class ExperienceDigitalComponent implements OnInit {

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
			case 'experiencedigital':
				window.open('http://experience.digital/','_blank');
				break;
			default:
				break;
		}
	}

}
