import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

//services
import { modal_service } from '../../services/modal/modal.service';

@Component({
	selector: 'app-experiments',
	templateUrl: './experiments.component.html',
	styleUrls: ['./experiments.component.scss'],
	providers: [ modal_service ]
})

export class ExperimentsComponent implements OnInit {
	constructor( private modal_service: modal_service ){}
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

	open_modal(){
		this.modal_service.open_modal();
	}
}
