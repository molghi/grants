import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverPageComponent } from './pages/discover/discover.component';
import { GrantsPageComponent } from './pages/grants-page/grants-page.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'discover', component: DiscoverPageComponent },
    { path: 'grants', component: GrantsPageComponent },
    { path: 'programs', component: ProgramsComponent },
    { path: 'blog', component: BlogPageComponent },
    { path: 'faq', component: FaqPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
