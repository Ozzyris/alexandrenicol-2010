import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Alexandre Nicol' } },
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: 'projects/carrott', component: CarrottComponent, data: { title: 'Alexandre Nicol - Carrott' } },
    { path: 'projects/birkenstock', component: BirkenstockComponent, data: { title: 'Alexandre Nicol - Birkenstock' } },
    { path: 'projects/le-petit-bateau', component: LePetitBateauComponent, data: { title: 'Alexandre Nicol - Le Petit Bateau' } },
    { path: 'projects/experience-digital', component: ExperienceDigitalComponent, data: { title: 'Alexandre Nicol - Experience Digital' } },
    { path: 'projects/decathlon', component: DecathlonComponent, data: { title: 'Alexandre Nicol - Decathlon' } },
    { path: 'projects/nexity', component: NexityComponent, data: { title: 'Alexandre Nicol - Nexity' } },
    { path: 'projects/freelancer-library', component: FreelancerLibraryComponent, data: { title: 'Alexandre Nicol - Freelancer Library' } },
    { path: 'projects/freelancer-browse-project', component: BrowseProjectComponent, data: { title: 'Alexandre Nicol - Freelancer Browse Project' } },
    { path: 'projects', component: ProjectsComponent, data: { title: 'Alexandre Nicol - Projects' } },
    { path: 'experiments', component: ExperimentsComponent, data: { title: 'Alexandre Nicol - Experiments' } },
    { path: 'methodology', component: MethodologyComponent, data: { title: 'Alexandre Nicol - Methodology' } },
    { path: 'contact', component: ContactComponent, data: { title: 'Alexandre Nicol - Contact' } },
    {
        path: 'externalRedirect',
        resolve: {
            url: 'externalUrlProvider',
        },
        // We need a component here because we cannot define the route otherwise
        component: HomeComponent,
    },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule{}
