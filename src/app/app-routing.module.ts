import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './components/pagina/pagina.component';
import { AdminComponent } from './components/admin/admin.component';
import { InicioComponent } from './components/pagina/inicio/inicio.component';


const routes: Routes = [
  {
    path: '', component: PaginaComponent, children: [
    { path: '', component: InicioComponent }
  ]},
  {
    path: 'admin', component: AdminComponent, children: [
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
