import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewComponent } from './components/new/new.component';
import { FaqComponent } from './components/faq/faq.component';
import { ApplicationComponent } from './components/application/application.component';
import { CreateComponent } from './components/create/create.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverPageComponent } from './pages/discover/discover.component';
import { DiscoverInitiativesComponent } from './components/discover/discover.component';
import { GrantsBlockComponent } from './components/grants-block/grants-block.component';
import { GrantsPageComponent } from './pages/grants-page/grants-page.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProgramsBlockComponent } from './components/programs-block/programs-block.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { GranteePageComponent } from './pages/grantee-page/grantee-page.component';
import { GranteeComponent } from './components/grantee/grantee.component';
import { MoreComponent } from './components/more/more.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { GrantPageComponent } from './pages/grant-page/grant-page.component';
import { GrantBlockComponent } from './components/grant-block/grant-block.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HeroComponent,
        ProjectsComponent,
        NewComponent,
        FaqComponent,
        ApplicationComponent,
        CreateComponent,
        FooterComponent,
        HomeComponent,
        DiscoverPageComponent,
        DiscoverInitiativesComponent,
        GrantsBlockComponent,
        GrantsPageComponent,
        ProgramsComponent,
        ProgramsBlockComponent,
        BlogPageComponent,
        BlogComponent,
        FaqPageComponent,
        ApplyComponent,
        ApplicationFormComponent,
        GranteePageComponent,
        GranteeComponent,
        MoreComponent,
        BlogPostPageComponent,
        BlogPostComponent,
        GrantPageComponent,
        GrantBlockComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
