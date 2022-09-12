import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//VIEWS
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { MethodologyComponent } from './views/methodology/methodology.component';
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

const routes: Routes = [
	{ path: 'home', component: HomeComponent, data: { title: 'Alexandre Nicol' } },
	{ path: '',   redirectTo: 'home', pathMatch: 'full' },
	{ path: 'projects', component: ProjectsComponent, data: { title: 'Alexandre Nicol - Projects' } },
	{ path: 'experiments', component: ExperimentsComponent, data: { title: 'Alexandre Nicol - Experiments' } },
	{ path: 'methodology', component: MethodologyComponent, data: { title: 'Alexandre Nicol - Methodology' } },
	{ path: 'contact', component: ContactComponent, data: { title: 'Alexandre Nicol - Contact' } },
	{ path: 'projects/qimaone', component: QimaoneComponent, data: { title: 'Alexandre Nicol - QIMAone' } },
	{ path: 'projects/birkenstock', component: BirkenstockComponent, data: { title: 'Alexandre Nicol - Birkenstock' } },
	{ path: 'projects/freelancer-browse-project', component: FreelancerBrowseProjectComponent, data: { title: 'Alexandre Nicol - Freelancer browse project' } },
	{ path: 'projects/carrott', component: CarrottComponent, data: { title: 'Alexandre Nicol - Carrott' } },
	{ path: 'projects/decathlon', component: DecathlonComponent, data: { title: 'Alexandre Nicol - Decathlon' } },
	{ path: 'projects/experience-digital', component: ExperienceDigitalComponent, data: { title: 'Alexandre Nicol - Experience Digital' } },
	{ path: 'projects/freelancer-library', component: FreelancerLibraryComponent, data: { title: 'Alexandre Nicol - Freelancer library' } },
	{ path: 'projects/le-petit-bateau', component: LePetitBateauComponent, data: { title: 'Alexandre Nicol - Le Petit Bateau' } },
	{ path: 'projects/nexity', component: NexityComponent, data: { title: 'Alexandre Nicol - Nexity' } },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})

export class AppRoutingModule{}
