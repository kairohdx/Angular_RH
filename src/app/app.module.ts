import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VagaComponent } from './components/company/vaga/vaga.component';
import { NavBarComponent } from './templates/top/nav-bar/nav-bar.component';
import { NotificationComponent } from './templates/top/notification/notification.component';
import { NavLinksComponent } from './templates/top/nav-links/nav-links.component';
import { LoginComponent } from './components/company/login/login.component';
import { InputComponent } from './components/shared/input/input.component';
import { ListaVagasComponent } from './components/company/lista-vagas/lista-vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    VagaComponent,
    NavBarComponent,
    NotificationComponent,
    NavLinksComponent,
    LoginComponent,
    InputComponent,
    ListaVagasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
