import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionariosPageComponent } from './funcionarios-page/funcionarios-page.component';
import { PacientesPageComponent } from './pacientes-page/pacientes-page.component';
import { UnidadesPageComponent } from './unidades-page/unidades-page.component';
import { CargosPageComponent } from './cargos-page/cargos-page.component';
import { MiPerfilPageComponent } from './mi-perfil-page/mi-perfil-page.component';



@NgModule({
  declarations: [LoginComponent, FuncionariosPageComponent, PacientesPageComponent, UnidadesPageComponent, CargosPageComponent, MiPerfilPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class PagesModule { }
