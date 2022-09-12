import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'animated-title',
	templateUrl: './animated-title.component.html',
	styleUrls: ['./animated-title.component.scss']
})

export class AnimatedTitleComponent implements OnInit {
	@Input() title!: string;
	@Input() subtitle!: string;
	@Input() color!: string;
	display_subtitle: boolean = true;
	subtitle_padding: string = "display_padding";

	constructor() {}
	ngOnInit(): void {
		if(this.subtitle == ''){
			this.display_subtitle = false;
			this.subtitle_padding = "hide_padding"
		}
	}

}
