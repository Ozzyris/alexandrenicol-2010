import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EXPERIMENTS } from '../../../assets/json/experiments';

//services
import { modal_service } from '../../services/modal/modal.service';

@Component({
	selector: 'modal',
	templateUrl: './modal.directive.html',
	styleUrls: ['./modal.directive.scss']
})

export class ModalDirective implements OnInit, OnDestroy{
	experiment: any = EXPERIMENTS
	active_article: any = '';
	is_modal_active: Boolean = false;
	modal_subscription: Subscription;

	constructor( private modal_service: modal_service ){}
	ngOnInit(){
		this.modal_subscription = this.modal_service.get_modal_status().subscribe(
			is_modal_open => {
				this.is_modal_active = is_modal_open.status;
				this.active_article = this.experiment[is_modal_open.id];
			});
	}
	ngOnDestroy(){
		this.modal_subscription.unsubscribe();
	}
}
