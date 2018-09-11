import { Directive, OnInit, OnDestroy } from '@angular/core';

import { modal_service } from '../services/modal/modal.service';

@Directive({
	selector: 'modal',
	template: 
    	`<div class="modal_container">
			<div class="modal">
				<div class="header">
					<h3>Expat manual</h3>
					<a class="icon"></a>
				</div>
				<div class="body">
					<div class="illustration" style="background-image: url('http://via.placeholder.com/800x400')"></div>
					<div class="content">
						<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id convallis elit. Nullam suscipit nisl in velit commodo commodo. Vestibulum luctus scelerisque orci, sit amet pharetra sapien dignissim sit amet. Nunc ultrices lacus vel luctus maximus. Quisque vitae enim metus. Donec scelerisque dui diam, sit amet volutpat mauris commodo ut. Sed eget diam quis eros vehicula dictum. Suspendisse potenti. In tristique varius ex id rutrum. Etiam mollis erat ut pharetra sodales. Donec et risus metus. Vivamus venenatis varius lobortis.</p>
					</div>
				</div>
				<div class="footer">
					<a class="button">Expatmanual.info</a>
				</div>
			</div>
			<div class="dark_background"></div>
		</div>`
})

export class ModalDirective implements OnInit, OnDestroy{
	constructor(){}
	ngOnInit(){}
	ngOnDestroy(){}
	open(){}
	close(){}
}
