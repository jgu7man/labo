import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './components/pagina/pagina.component';
import { AdminComponent } from './components/admin/admin.component';
import { InicioComponent } from './components/pagina/inicio/inicio.component';
import { ServiciosComponent } from './components/pagina/servicios/servicios.component';
import { ContactanosComponent } from './components/pagina/contactanos/contactanos.component';


const routes: Routes = [
  {
    path: '', component: PaginaComponent, children: [
    { path: '', component: InicioComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'contactanos', component: ContactanosComponent }
  ]},
  {
    path: 'admin', component: AdminComponent, children: [
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
