import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertUpdatePassComponent } from './alert-update-pass/alert-update-pass.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AlertDeleteFuncionarioComponent } from './alert-delete-funcionario/alert-delete-funcionario.component';
import { AlertDeletePacienteComponent } from './alert-delete-paciente/alert-delete-paciente.component';
import { AlertDeleteUnidadComponent } from './alert-delete-unidad/alert-delete-unidad.component';
import { AlertDeleteCargoComponent } from './alert-delete-cargo/alert-delete-cargo.component';



@NgModule({
  declarations: [AlertUpdatePassComponent, AlertDeleteFuncionarioComponent, AlertDeletePacienteComponent, AlertDeleteUnidadComponent, AlertDeleteCargoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    AlertUpdatePassComponent,
    AlertDeleteFuncionarioComponent,
    AlertDeletePacienteComponent
  ]
})
export class ModalsModule { }
