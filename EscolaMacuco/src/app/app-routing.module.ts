import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { DashbordComponent } from './Dashbord/Dashbord.component';
import { PerfilComponent } from './Perfil/Perfil.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashbord', pathMatch: "full" },
  { path: 'Dashbord', component: DashbordComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'Perfil', component: PerfilComponent },
  { path: 'professores', component: ProfessoresComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
