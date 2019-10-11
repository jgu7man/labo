import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './components/pagina/pagina.component';
import { InicioComponent } from './components/pagina/inicio/inicio.component';
import { ServiciosComponent } from './components/pagina/servicios/servicios.component';
import { ContactanosComponent } from './components/pagina/contactanos/contactanos.component';
import { PdpComponent } from './components/pagina/app-footer/pdp/pdp.component';
// import { AdminComponent } from './admin/admin.component';
// import { LoginComponent } from './admin/components/login/login.component';
// import { PanelComponent } from './admin/components/panel/panel.component';


const routes: Routes = [
  {
    path: '', component: PaginaComponent, children: [
    { path: '', component: InicioComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'contactanos', component: ContactanosComponent },
      { path: 'politica-de-privacidad', component: PdpComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
