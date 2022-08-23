import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-qimaone',
  templateUrl: './qimaone.component.html',
  styleUrls: ['./qimaone.component.scss']
})
export class QimaoneComponent implements OnInit {
    constructor(){}
    ngOnInit(): void{
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

}
