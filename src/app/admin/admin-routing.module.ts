import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { MxDashboardComponent } from './components/panel/mx-dashboard/mx-dashboard.component';
import { MxUsuariosComponent } from './components/panel/mx-usuarios/mx-usuarios.component';
import { MxAdminsComponent } from './components/panel/mx-admins/mx-admins.component';
import { MxAgregarFormComponent } from './components/panel/mx-agregar-form/mx-agregar-form.component';
import { MxTableComponent } from './components/panel/mx-table/mx-table.component';
import { MxListaComponent } from './components/panel/mx-lista/mx-lista.component';
import { MxInfoComponent } from './components/panel/mx-info/mx-info.component';
import { MxEditFormComponent } from './components/panel/mx-edit-form/mx-edit-form.component';
import { PedidosComponent } from './components/panel/pedidos/pedidos.component';
import { AgregarPedidoComponent } from './components/panel/pedidos/agregar-pedido/agregar-pedido.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: 'panel', pathMatch: 'full'},
      { path: 'login', component: LoginComponent },
      { path: 'panel', component: PanelComponent, children: [
        { path: '', component: MxDashboardComponent },
        { path: 'dashboard', component: MxDashboardComponent },
        { path: 'agregar/:entity', component: MxAgregarFormComponent },
        { path: 'editar/:entity/:id', component: MxEditFormComponent },
        { path: 'lista/:tabla', component: MxListaComponent },
        { path: 'lista/:tabla/:id', component: MxInfoComponent },
        { path: 'admins', component: MxAdminsComponent, data: { tag: 'admins' } },
        { path: 'pedidos', component: PedidosComponent, data: { tag: 'pedidos' } },
        { path: 'pedidos/agregar', component: AgregarPedidoComponent}
      ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
