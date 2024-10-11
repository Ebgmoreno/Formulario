import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { DetallesEquiposComponent } from './detalles-equipos/detalles-equipos.component';
import { FormularioDetallesComponent } from './formulario-detalles/formulario-detalles.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // Asegúrate de importar AuthGuard

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'formulario-registro', component: FormularioRegistroComponent, canActivate: [AuthGuard] },
  { path: 'lista-equipos', component: ListaEquiposComponent, canActivate: [AuthGuard] },
  { path: 'detalles-equipo', component: DetallesEquiposComponent, canActivate: [AuthGuard] },
  { path: 'formulario-detalles', component: FormularioDetallesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
