import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, } from "@angular/common/http";
// import {  } from '@angular/common';

import { CompareValidatorDirective } from "./directives/validator.directive";
import { PwdToggleDirective } from "./directives/pwd-toggle.directive";

import { AdminComponent } from './admin.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { MxUsuariosComponent } from './components/panel/mx-usuarios/mx-usuarios.component';
import { MxDashboardComponent } from './components/panel/mx-dashboard/mx-dashboard.component';
import { MxSidenavComponent } from './components/panel/mx-sidenav/mx-sidenav.component';
import { MxAdminsComponent } from './components/panel/mx-admins/mx-admins.component';
import { MxTableComponent } from './components/panel/mx-table/mx-table.component';
import { MxAgregarFormComponent } from './components/panel/mx-agregar-form/mx-agregar-form.component';
import { MxListaComponent } from './components/panel/mx-lista/mx-lista.component';
import { MxInfoComponent } from './components/panel/mx-info/mx-info.component';
import { MxEditFormComponent } from './components/panel/mx-edit-form/mx-edit-form.component';
import { MxDeletePopupComponent } from './components/panel/mx-delete-popup/mx-delete-popup.component';
import { PedidosComponent } from './components/panel/pedidos/pedidos.component';
import { AgregarPedidoComponent } from './components/panel/pedidos/agregar-pedido/agregar-pedido.component';

@NgModule({
  declarations: [
    CompareValidatorDirective,
    PwdToggleDirective,
    AdminComponent,
    LoginComponent,
    PanelComponent,
    MxUsuariosComponent,
    MxDashboardComponent,
    MxSidenavComponent,
    MxAdminsComponent,
    MxTableComponent,
    MxAgregarFormComponent,
    MxListaComponent,
    MxInfoComponent,
    MxEditFormComponent,
    MxDeletePopupComponent,
    PedidosComponent,
    AgregarPedidoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [
        // { provide: NGFOR_TRACKBY_FN }
    ],
})
export class AdminModule { }
