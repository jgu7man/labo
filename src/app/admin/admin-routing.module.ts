import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { MxDashboardComponent } from './components/panel/mx-dashboard/mx-dashboard.component';
import { MxUsuariosComponent } from './components/panel/mx-usuarios/mx-usuarios.component';
import { MxAdminsComponent } from './components/panel/mx-admins/mx-admins.component';
import { MxAgregarFormComponent } from './components/panel/mx-agregar-form/mx-agregar-form.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'panel', component: PanelComponent, children: [
          { path: '', component: MxDashboardComponent },
          { path: 'dashboard', component: MxDashboardComponent },
          { path: 'agregar/:entity', component: MxAgregarFormComponent},
          { path: 'admins', component: MxAdminsComponent, data: { tag: 'admins' } },
      ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
