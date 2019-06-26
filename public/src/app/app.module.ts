import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//EXTERNAL PACKAGE

//VIEWS
import { HomeComponent } from './views/home/home.component';
import { MethodologyComponent } from './views/methodology/methodology.component';
import { ContactComponent } from './views/contact/contact.component';
import { ExperimentsComponent } from './views/experiments/experiments.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { CarrottComponent } from './views/projects/carrott/carrott.component';
import { BirkenstockComponent } from './views/projects/birkenstock/birkenstock.component';
import { LePetitBateauComponent } from './views/projects/le-petit-bateau/le-petit-bateau.component';
import { ExperienceDigitalComponent } from './views/projects/experience-digital/experience-digital.component';
import { DecathlonComponent } from './views/projects/decathlon/decathlon.component';
import { NexityComponent } from './views/projects/nexity/nexity.component';
import { FreelancerLibraryComponent } from './views/projects/freelancer-library/freelancer-library.component';
import { BrowseProjectComponent } from './views/projects/browse-project/browse-project.component';

//DIRECTIVES
import { ModalDirective } from './directives/modal/modal.directive';
import { ExternalurlDirective } from './directives/externalurl/externalurl.directive';
import { ModalCodepenDirective } from './directives/modal-codepen/modal-codepen.directive';

//PIPES
import { SanitizerPipe } from './pipes/sanitizer/sanitizer.pipe';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MethodologyComponent,
		ExperimentsComponent,
		ContactComponent,
		ProjectsComponent,
		CarrottComponent,
		BirkenstockComponent,
		LePetitBateauComponent,
		ExperienceDigitalComponent,
		DecathlonComponent,
		NexityComponent,
		FreelancerLibraryComponent,
		BrowseProjectComponent,
		ModalDirective,
		ExternalurlDirective,
		ModalCodepenDirective,
		SanitizerPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
