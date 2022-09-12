import { Component, OnInit } from '@angular/core';

//services
import { ModalService } from '../../services/modal/modal.service';

@Component({
	selector: 'app-experiments',
	templateUrl: './experiments.component.html',
	styleUrls: ['./experiments.component.scss']
})

export class ExperimentsComponent implements OnInit {

	constructor( public modal_service: ModalService ){}
	ngOnInit(): void{}

}
