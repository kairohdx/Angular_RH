import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaVagasComponent } from './components/company/lista-vagas/lista-vagas.component';
import { LoginComponent } from './components/company/login/login.component';
import { VagaComponent } from './components/company/vaga/vaga.component';

const routes: Routes = [
  { path: 'empresa', component: LoginComponent },
  { path: 'empresa/vagas', component: ListaVagasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
