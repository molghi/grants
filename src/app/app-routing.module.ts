import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverPageComponent } from './pages/discover/discover.component';
import { GrantsPageComponent } from './pages/grants-page/grants-page.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { GranteePageComponent } from './pages/grantee-page/grantee-page.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { GrantPageComponent } from './pages/grant-page/grant-page.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'discover', component: DiscoverPageComponent },
    { path: 'grants', component: GrantsPageComponent },
    { path: 'programs', component: ProgramsComponent },
    { path: 'blog', component: BlogPageComponent },
    { path: 'blog-post', component: BlogPostPageComponent },
    { path: 'faq', component: FaqPageComponent },
    { path: 'apply', component: ApplyComponent },
    { path: 'grantee', component: GranteePageComponent },
    { path: 'grant', component: GrantPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
