import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class MailerService {
	httpOptions: any;

	constructor( private http: HttpClient ){
		this.httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json'
			})
		};
	}

	contact_email( mail ): Observable<any>{
		let url = environment.api_url + 'mailer/contact';
		return this.http.post(url, {name: mail.name, email: mail.email, message: mail.message}, this.httpOptions);
	}
}