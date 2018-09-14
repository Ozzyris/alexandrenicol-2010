//INTERNAL PACKAGE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//EXTERNAL PACKAGE

//VIEWS
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MethodologyComponent } from './views/methodology/methodology.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { CarrottComponent } from './views/projects/carrott/carrott.component';
import { BirkenstockComponent } from './views/projects/birkenstock/birkenstock.component';
import { LePetitBateauComponent } from './views/projects/le-petit-bateau/le-petit-bateau.component';
import { ExperienceDigitalComponent } from './views/projects/experience-digital/experience-digital.component';
import { DecatlonComponent } from './views/projects/decatlon/decatlon.component';
import { NexityComponent } from './views/projects/nexity/nexity.component';
import { ExperimentsComponent } from './views/experiments/experiments.component';

//DIRECTIVES
import { ModalDirective } from './directives/modal/modal.directive';
import { SanitizerPipe } from './pipes/sanitizer/sanitizer.pipe';
import { ExternalurlDirective } from './directives/externalurl/externalurl.directive';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { title: 'Alexandre Nicol' } },
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: 'projects/carrott', component: CarrottComponent, data: { title: 'Alexandre Nicol - Carrott' } },
    { path: 'projects/birkenstock', component: BirkenstockComponent, data: { title: 'Alexandre Nicol - Birkenstock' } },
    { path: 'projects/le-petit-bateau', component: LePetitBateauComponent, data: { title: 'Alexandre Nicol - Le Petit Bateau' } },
    { path: 'projects/experience-digital', component: ExperienceDigitalComponent, data: { title: 'Alexandre Nicol - Experience Digital' } },
    { path: 'projects/decatlon', component: DecatlonComponent, data: { title: 'Alexandre Nicol - Decatlon' } },
    { path: 'projects/nexity', component: NexityComponent, data: { title: 'Alexandre Nicol - Nexity' } },
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
    declarations: [
        AppComponent,
        HomeComponent,
        MethodologyComponent,
        ProjectsComponent,
        AboutComponent,
        ContactComponent,
        CarrottComponent,
        BirkenstockComponent,
        LePetitBateauComponent,
        ExperienceDigitalComponent,
        DecatlonComponent,
        NexityComponent,
        ExperimentsComponent,
        ModalDirective,
        SanitizerPipe,
        ExternalurlDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
