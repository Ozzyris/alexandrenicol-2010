import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class modal_service {
    private $is_modal_open = new Subject<any>();

	constructor(){}

    open_modal( content ) {
        this.$is_modal_open.next({status: true, id: content});
    }
    close_modal(){
        this.$is_modal_open.next({status: false});
    }

    get_modal_status(): Observable<any> {
        return this.$is_modal_open;
    }
}

// observer.next("bla bla bla")
        // observer.complete()