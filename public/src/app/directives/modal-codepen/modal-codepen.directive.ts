import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

//services
import { ModalCodepenService } from '../../services/modal-codepen/modal-codepen.service';

@Component({
	selector: 'modal-codepen',
	templateUrl: './modal-codepen.directive.html',
	styleUrls: ['./modal-codepen.directive.scss']
})

export class ModalCodepenDirective implements OnInit, OnDestroy{
	is_modal_active: Boolean = false;
	modal_subscription: Subscription;
	pen_id: any;
	pen_url: any;

	constructor( private modal_codepen_service: ModalCodepenService ){}
	ngOnInit(){
		this.modal_subscription = this.modal_codepen_service.get_modal_status().subscribe(
			is_modal_open => {
				this.is_modal_active = is_modal_open.status;
				if( is_modal_open.status == true){
					this.pen_url = '//codepen.io/Ozzyris/embed/' + is_modal_open.id + '/?theme-id=dark&default-tab=result';
				}
			});
	}
	ngOnDestroy(){
		this.modal_subscription.unsubscribe();
	}
}
