import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//VIEWS
import { HomeComponent } from './views/home/home.component';
import { MethodologyComponent } from './views/methodology/methodology.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ExperimentsComponent } from './views/experiments/experiments.component';
import { ContactComponent } from './views/contact/contact.component';
import { QimaoneComponent } from './views/projects/qimaone/qimaone.component';
import { BirkenstockComponent } from './views/projects/birkenstock/birkenstock.component';
import { FreelancerBrowseProjectComponent } from './views/projects/freelancer-browse-project/freelancer-browse-project.component';
import { CarrottComponent } from './views/projects/carrott/carrott.component';
import { DecathlonComponent } from './views/projects/decathlon/decathlon.component';
import { ExperienceDigitalComponent } from './views/projects/experience-digital/experience-digital.component';
import { FreelancerLibraryComponent } from './views/projects/freelancer-library/freelancer-library.component';
import { LePetitBateauComponent } from './views/projects/le-petit-bateau/le-petit-bateau.component';
import { NexityComponent } from './views/projects/nexity/nexity.component';

//COMPONENTS
import { ModalComponent } from './components/modal/modal.component';
import { AnimatedTitleComponent } from './components/animated-title/animated-title.component';

//DIRECTIVES
import { ExternalurlDirective } from './directives/externalurl/externalurl.directive';

//PIPES
import { SanitizerPipe } from './pipes/sanitizer/sanitizer.pipe';

//EXTERNAL PACKAGE
import { MomentModule } from 'ngx-moment';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MethodologyComponent,
		ProjectsComponent,
		ExperimentsComponent,
		ContactComponent,
		QimaoneComponent,
		BirkenstockComponent,
		FreelancerBrowseProjectComponent,
		CarrottComponent,
		DecathlonComponent,
		ExperienceDigitalComponent,
		FreelancerLibraryComponent,
		LePetitBateauComponent,
		NexityComponent,
		ModalComponent,
  		AnimatedTitleComponent,
		ExternalurlDirective,
		SanitizerPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		CommonModule,
		MomentModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
