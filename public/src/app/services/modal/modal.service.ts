import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class modal_service {
    private $is_modal_open = new Subject<any>();

	constructor(){}

    open_modal() {
        this.$is_modal_open.next({status: 'now we send the observable'});
        this.$is_modal_open.complete();
    }

    get_modal_status(): Observable<any> {
        return this.$is_modal_open.asObservable();
    }
}

// observer.next("bla bla bla")
        // observer.complete()