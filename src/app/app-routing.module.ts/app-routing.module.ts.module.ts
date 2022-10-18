import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../pages/landing/landing.component';
import { QuienesSomosComponent } from '../pages/quienes-somos/quienes-somos.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: '', component: LandingComponent},
  {path: 'home', component: LandingComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleTsModule {}
// export class AppRoutingModule { }
