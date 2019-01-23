import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

//services
import { modal_service } from '../../services/modal/modal.service';
import { ModalCodepenService } from '../../services/modal-codepen/modal-codepen.service';

@Component({
	selector: 'app-experiments',
	templateUrl: './experiments.component.html',
	styleUrls: ['./experiments.component.scss']
})

export class ExperimentsComponent implements OnInit {
	constructor( public modal_service: modal_service, public modal_codepen_service: ModalCodepenService ){}
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
