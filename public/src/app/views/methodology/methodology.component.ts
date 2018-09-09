import { Component, OnInit } from '@angular/core';
import { METHODOLOGY } from '../../../assets/json/methodology';


@Component({
	selector: 'app-methodology',
	templateUrl: './methodology.component.html',
	styleUrls: ['./methodology.component.scss']
})

export class MethodologyComponent implements OnInit {
	methodology: any = METHODOLOGY;
	category: string = 'briefing';
	is_loading: boolean = true;
	arrow_left_position: string = '0vw';

	constructor(){}
	ngOnInit(){
		this.arrow_left_position = ((5.5 + (12.5 * 1))) + 'vw';
	}

	change_category( new_category ){
		this.is_loading = true;
		this.category = new_category;
		switch(new_category){
			case 'briefing':
				this.arrow_left_position = ((5.5 + (12.5 * 1))) + 'vw';
				break;
			case 'ideation':
				this.arrow_left_position = ((5.5 + (12.5 * 2))) + 'vw';
				break;
			case 'concepts':
				this.arrow_left_position = ((5.5 + (12.5 * 3))) + 'vw';
				break;
			case 'workflows':
				this.arrow_left_position = ((5.5 + (12.5 * 4))) + 'vw';
				break;
			case 'prototypes':
				this.arrow_left_position = ((5.5 + (12.5 * 5))) + 'vw';
				break;
			case 'launch':
				this.arrow_left_position = ((5.5 + (12.5 * 6))) + 'vw';
				break;
		}
	}

	hide_loading(){
		this.is_loading = false;
	}

}
