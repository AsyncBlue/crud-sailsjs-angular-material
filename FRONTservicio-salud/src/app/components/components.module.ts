import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { UpdatePassComponent } from './update-pass/update-pass.component';
import { ModalsModule } from '../modals/modals.module';
import { AppRoutingModule } from '../app-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { CrearNuevoFuncionarioComponent } from './crear-nuevo-funcionario/crear-nuevo-funcionario.component';
import { UpdateFuncionarioComponent } from './update-funcionario/update-funcionario.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { CrearNuevoPacienteComponent } from './crear-nuevo-paciente/crear-nuevo-paciente.component';
import { UpdatePacienteComponent } from './update-paciente/update-paciente.component';
import { CrearNuevaUnidadComponent } from './crear-nueva-unidad/crear-nueva-unidad.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { UpdateUnidadComponent } from './update-unidad/update-unidad.component';
import { CargosComponent } from './cargos/cargos.component';
import { CrearNuevoCargoComponent } from './crear-nuevo-cargo/crear-nuevo-cargo.component';
import { UpdateCargoComponent } from './update-cargo/update-cargo.component';
import { RegistroSesionComponent } from './registro-sesion/registro-sesion.component';



@NgModule({
  declarations: [AuthComponent, NavbarComponent, MiPerfilComponent, UpdatePassComponent, FuncionariosComponent, CrearNuevoFuncionarioComponent, UpdateFuncionarioComponent, PacientesComponent, CrearNuevoPacienteComponent, UpdatePacienteComponent, CrearNuevaUnidadComponent, UnidadesComponent, UpdateUnidadComponent, CargosComponent, CrearNuevoCargoComponent, UpdateCargoComponent, RegistroSesionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ModalsModule,
    AppRoutingModule
  ],
  exports: [
    AuthComponent,
    NavbarComponent,
    MiPerfilComponent,
    UpdatePassComponent,
    FuncionariosComponent,
    CrearNuevoFuncionarioComponent,
    PacientesComponent,
    UnidadesComponent,
    CargosComponent
  ]
})
export class ComponentsModule { }
