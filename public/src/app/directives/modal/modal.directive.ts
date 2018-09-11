import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

//services
import { modal_service } from '../../services/modal/modal.service';

@Component({
	selector: 'modal',
	templateUrl: './modal.directive.html',
	styleUrls: ['./modal.directive.scss'],
	providers: [ modal_service ]
})

export class ModalDirective implements OnInit, OnDestroy{
	is_modal_active: Boolean = false;
	subscription: Subscription;

	constructor( private modal_service: modal_service ){}
	ngOnInit(){
		// this.subscription = 
		this.modal_service.get_modal_status().subscribe(
			is_modal_open => {
				console.log( is_modal_open );
				this.is_modal_active = true;
			});
	}
	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
	open(){}
	close(){}
}
