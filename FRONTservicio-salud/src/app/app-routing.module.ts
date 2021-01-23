import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FuncionariosPageComponent } from './pages/funcionarios-page/funcionarios-page.component';
import { UpdateFuncionarioComponent } from './components/update-funcionario/update-funcionario.component';
import { PacientesPageComponent } from './pages/pacientes-page/pacientes-page.component';
import { UpdatePacienteComponent } from './components/update-paciente/update-paciente.component';
import { UnidadesPageComponent } from './pages/unidades-page/unidades-page.component';
import { UpdateUnidadComponent } from './components/update-unidad/update-unidad.component';
import { CargosPageComponent } from './pages/cargos-page/cargos-page.component';
import { UpdateCargoComponent } from './components/update-cargo/update-cargo.component';
import { MiPerfilPageComponent } from './pages/mi-perfil-page/mi-perfil-page.component';
import { RegistroSesionComponent } from './components/registro-sesion/registro-sesion.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mi-perfil-page', component: MiPerfilPageComponent },
  { path: 'funcionarios-page', component: FuncionariosPageComponent },
  { path: 'pacientes-page', component: PacientesPageComponent },
  { path: 'update-funcionario/:id/:nombre/:apellido/:rut/:perfil/:unidadAdministrativa/:cargo', component: UpdateFuncionarioComponent },
  { path: 'update-paciente/:id/:nombre/:apellido/:rut/:fechaNacimiento/:direccion/:genero', component: UpdatePacienteComponent },
  { path: 'unidades-page', component: UnidadesPageComponent },
  { path: 'update-unidad/:id/:titulo/:descripcion/:unidadPadre', component: UpdateUnidadComponent },
  { path: 'cargos-page', component: CargosPageComponent },
  { path: 'update-cargo/:id/:titulo/:descripcion', component: UpdateCargoComponent },
  { path: 'registro-sesion/:id', component: RegistroSesionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
