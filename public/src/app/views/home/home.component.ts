import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import anime from 'animejs';

//services
import { ModalService } from '../../services/modal/modal.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	host: {
		'(window:resize)': 'onResize($event)'
	}
})

export class HomeComponent implements OnInit, AfterViewInit {
	introduction_sentence: any = '';

	constructor( public modal_service: ModalService ){}
	ngOnInit(){
		this.get_introduction_sentence();
	}
	ngAfterViewInit() {
	}

	get_introduction_sentence(){
		let hour = new Date().getHours();
		if( hour >= 0 && hour < 6 ){
			this.introduction_sentence = 'Good Night';
		}else if( hour >= 6 && hour < 12 ){
			this.introduction_sentence = 'Good Morning';
		}else if( hour >= 12 && hour < 19 ){
			this.introduction_sentence = 'Good Afternoon';
		}else if( hour >= 19 && hour <= 24 ){
			this.introduction_sentence = 'Good Evening';
		}
	}
}
