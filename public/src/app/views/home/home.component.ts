import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import anime from 'animejs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	host: {
		'(window:resize)': 'onResize($event)'
	}
})

export class HomeComponent implements OnInit, AfterViewInit {
	@ViewChild("canvas_explosion") canvas_explosion;
	introduction_sentence: any = '';
	context: CanvasRenderingContext2D;

	constructor(){}
	ngOnInit(){
		this.get_introduction_sentence();
	}
	ngAfterViewInit() {
		this.set_up_explosion();
	}

	// Relaunch the canvas while resize
	onResize(event) {
		this.set_up_explosion();
	}

	get_introduction_sentence(){
		let hour = new Date().getHours();
		if( hour >= 0 && hour < 6 ){
			this.introduction_sentence = 'Good Night';
		}else if( hour >= 6 && hour < 12 ){
			this.introduction_sentence = 'Good Morning';
		}else if( hour >= 12 && hour < 19 ){
			this.introduction_sentence = 'Good Afternoon';
		}else if( hour >= 19 && hour <= 24 ){
			this.introduction_sentence = 'Good Evening';
		}
	}

	set_up_explosion(){
		//https://codepen.io/juliangarnier/pen/gmOwJX?editors=0010
		// SETUP
		let canvas_element = this.canvas_explosion.nativeElement;
		this.context = canvas_element.getContext("2d");
		var ctx = this.context;

		// CONSTANT
		let numberOfParticules = 10,
			pointerX = 0,
			pointerY = 0,
			colors = ['#ffb54c', '#ffd073'],
			centerX = window.innerWidth / 2,
			centerY = window.innerHeight / 2,
			animation_timing = 1000;

		function set_canvas_size( canvas_element ) {
			canvas_element.width = window.innerWidth * 2;
			canvas_element.height = window.innerHeight * 2;
			canvas_element.style.width = window.innerWidth + 'px';
			canvas_element.style.height = window.innerHeight + 'px';
			canvas_element.getContext('2d').scale(2, 2);
			ctx.clearRect(0, 0, canvas_element.width, canvas_element.height);
		}

		function createCircle( x, y ) {
			let circle = {
				x: x,
				y: y,
				color: '#FFF',
				radius: .1,
				alpha: .5,
				lineWidth: 6,
				draw: function() {
					ctx.globalAlpha = circle.alpha;
					ctx.beginPath();
					ctx.arc(circle.x, circle.y, (circle.radius/10), 0, 2 * Math.PI, true);
					ctx.lineWidth = circle.lineWidth;
					ctx.strokeStyle = circle.color;
					ctx.stroke();
					ctx.globalAlpha = 1;
				}
			};
			return circle;
		}

		function setParticuleDirection( particule ) {
			let angle = anime.random(0, 360) * Math.PI / 180,
				value = anime.random(10, 30),
				radius = [-1, 1][anime.random(0, 1)] * value;
			return {
				x: particule.x + radius * Math.cos(angle),
				y: particule.y + radius * Math.sin(angle)
			}
		}

		function createParticule( x, y ) {
			let particule = {
				x: x,
				y: y,
				color: colors[anime.random(0, colors.length - 1)],
				radius: anime.random(3, 10),
				endPos: {},
				draw: function() {
					ctx.beginPath();
					ctx.arc(particule.x, particule.y, particule.radius, 0, 2 * Math.PI, true);
					ctx.fillStyle = particule.color;
					ctx.fill();
				}
			};
			particule.endPos = setParticuleDirection( particule );
			return particule;
		}

		function renderParticule(anim) {
			for (var i = 0; i < anim.animatables.length; i++) {
				anim.animatables[i].target.draw();
			}
		}

		function animateParticules( x, y ) {
			let circle = createCircle( x, y ),
				particules = [];

			for (var i = 0; i < numberOfParticules; i++) {
			  particules.push( createParticule( x, y ) );
			}
			anime.timeline()
				.add({
					targets: particules,
					x: function(p) { return p.endPos.x; },
					y: function(p) { return p.endPos.y; },
					radius: 0.1,
					duration: anime.random(1200, 1800),
					easing: 'easeOutExpo',
					update: renderParticule
				})
				.add({
					targets: circle,
					radius: anime.random(80, 160),
					lineWidth: 0,
					alpha: {
						value: 0,
						easing: 'linear',
						duration: anime.random(600, 800),  
					},
					duration: anime.random(1200, 1800),
					easing: 'easeOutExpo',
					update: renderParticule,
					offset: 0
			});
		}
		var render = anime({
			duration: Infinity,
			update: function() {
			  ctx.clearRect(0, 0, canvas_element.width, canvas_element.height);
			}
		});

		function launch_animation(){
			setTimeout(function(){
				animation_timing = animation_timing + 50;
				animateParticules( anime.random(100, (window.innerWidth-100)), anime.random(100, (window.innerHeight-100)) );
				anime({duration: 200}).finished.then( launch_animation() );
			}, animation_timing);
		}

		set_canvas_size( canvas_element );
		launch_animation();
	}

}
