import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule,  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { NavbarComponent } from './components/pagina/navbar/navbar.component';
import { AppFooterComponent } from './components/pagina/app-footer/app-footer.component';

import { InicioComponent } from './components/pagina/inicio/inicio.component';
import { HeroComponent } from './components/pagina/inicio/hero/hero.component';

import { AdminComponent } from './components/admin/admin.component';
import { InfoComponent } from './components/pagina/inicio/info/info.component';
import { AccionesComponent } from './components/pagina/inicio/acciones/acciones.component';
import { DestacadosComponent } from './components/pagina/inicio/destacados/destacados.component';
import { ServiciosComponent } from './components/pagina/servicios/servicios.component';
import { HeaderServiciosComponent } from './components/pagina/servicios/header-servicios/header-servicios.component';
import { AccionesServiciosComponent } from './components/pagina/servicios/acciones-servicios/acciones-servicios.component';
import { ContactanosComponent } from './components/pagina/contactanos/contactanos.component';
import { AppHeaderComponent } from './components/pagina/app-header/app-header.component';
import { ContenidoContactanosComponent } from './components/pagina/contactanos/contenido-contactanos/contenido-contactanos.component';
import { SocialMenuComponent } from './components/pagina/contactanos/social-menu/social-menu.component';
import { ContactFormComponent } from './components/pagina/contactanos/contact-form/contact-form.component';
import { WhatsappFormComponent } from './components/pagina/contactanos/whatsapp-form/whatsapp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    AdminComponent,
    InicioComponent,
    NavbarComponent,
    AppFooterComponent,
    HeroComponent,
    InfoComponent,
    AccionesComponent,
    DestacadosComponent,
    ServiciosComponent,
    HeaderServiciosComponent,
    AccionesServiciosComponent,
    ContactanosComponent,
    AppHeaderComponent,
    ContenidoContactanosComponent,
    SocialMenuComponent,
    ContactFormComponent,
    WhatsappFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
