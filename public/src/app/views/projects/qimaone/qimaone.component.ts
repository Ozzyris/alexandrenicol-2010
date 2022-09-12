import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-qimaone',
	templateUrl: './qimaone.component.html',
	styleUrls: ['./qimaone.component.scss']
})
export class QimaoneComponent implements OnInit, OnDestroy {
	private queryParamSub: any;
	back_details: any = {
		link: '/projects',
		title: 'All Projects'
	};

	constructor( private route: ActivatedRoute ){}
	ngOnInit(): void {
		this.queryParamSub = this.route.queryParams.subscribe(params => {
			if( params['origin'] == 'home'){
				this.back_details.link = '/home';
				this.back_details.title = 'Home';
			}
		});
	}
	ngOnDestroy() {
		this.queryParamSub.unsubscribe();
	}


}
