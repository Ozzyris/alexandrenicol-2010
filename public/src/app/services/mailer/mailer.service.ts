import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';

@Injectable()

export class MailerService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor( private http: Http ){}

	contact_email( mail ): Promise<any>{
		const url = environment.api_url + 'mailer/contact';
		return this.http
			.post(url, JSON.stringify({name: mail.name, email: mail.email, message: mail.message}), {headers: this.headers})
			.toPromise()
			.then(res => res.json());
		

	}

}
