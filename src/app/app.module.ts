import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { FooterComponent } from './components/footer/footer.component'

import { ProfileService } from './services/profile.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilesComponent,
    SkillListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
