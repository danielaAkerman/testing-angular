import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { ButtonsComponent } from './layout/buttons/buttons.component';
import { LisaComponent } from './layout/lisa/lisa.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ButtonsComponent,
    LisaComponent,
    FooterComponent,
    LandingComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleTsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
