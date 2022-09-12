import { Component, OnInit } from '@angular/core';

//services
import { ModalService } from '../../services/modal/modal.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	introduction_sentence: any = '';


	constructor( public modal_service: ModalService ){}
	ngOnInit(): void {
		this.get_introduction_sentence();
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

