import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VagaComponent } from './components/company/vaga/vaga.component';
import { NavBarComponent } from './templates/top/nav-bar/nav-bar.component';
import { NotificationComponent } from './templates/top/notification/notification.component';
import { NavLinksComponent } from './templates/top/nav-links/nav-links.component';
import { LoginComponent } from './components/company/login/login.component';
import { InputComponent } from './components/shared/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    VagaComponent,
    NavBarComponent,
    NotificationComponent,
    NavLinksComponent,
    LoginComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
