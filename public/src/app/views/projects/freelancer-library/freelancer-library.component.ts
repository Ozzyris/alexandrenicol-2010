import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
	selector: 'app-freelancer-library',
	templateUrl: './freelancer-library.component.html',
	styleUrls: ['./freelancer-library.component.scss']
})

export class FreelancerLibraryComponent implements OnInit {

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
