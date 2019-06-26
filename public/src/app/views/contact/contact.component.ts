import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { MailerService } from '../../services/mailer/mailer.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	providers: [ MailerService ]
})

export class ContactComponent implements OnInit {
	mail: any = {
		name: '',
		email: '',
		message: ''
	}
	is_error: any = [];

	constructor( private mailer_services: MailerService ){}
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

	send_mail(){
		let open_door = true;
		this.is_error = [];

		if( this.mail.name == ''){
			open_door = false;
			this.is_error.name = true;
		}
		if( this.mail.email == ''){
			open_door = false;
			this.is_error.email = true;
		}
		if( this.mail.email.indexOf('@') == -1 || this.mail.email.indexOf('.') == -1 ){
			open_door = false;
			this.is_error.email = true;
		}
		if( this.mail.message == ''){
			open_door = false;
			this.is_error.message = true;
		}

		if( open_door ){
			this.mailer_services.contact_email( this.mail )
				.subscribe( obj => {
					alert(obj.message);
					this.mail = {
						name: '',
						email: '',
						message: ''
					}
				}, error => {
					alert(error.message);
				})
		}
	}
}