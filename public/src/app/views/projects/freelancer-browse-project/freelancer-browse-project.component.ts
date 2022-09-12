import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-freelancer-browse-project',
	templateUrl: './freelancer-browse-project.component.html',
	styleUrls: ['./freelancer-browse-project.component.scss']
})

export class FreelancerBrowseProjectComponent implements OnInit {
	private queryParamSub: any;
	back_details: any = {
		link: '/projects',
		title: 'All Projects'
	};

	constructor( private route: ActivatedRoute ){}
	ngOnInit(): void {
		this.queryParamSub = this.route.queryParams.subscribe(params => {
			console.log( params['origin'] );
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
