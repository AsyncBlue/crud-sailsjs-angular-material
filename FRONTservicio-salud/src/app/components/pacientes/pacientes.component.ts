import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatAccordion} from '@angular/material/expansion';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { Paciente } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { AlertDeletePacienteComponent } from '../../modals/alert-delete-paciente/alert-delete-paciente.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  data = new MatTableDataSource<Paciente>();
  tableColumns: string[] = ['nombre', 'apellido', 'rut', 'fechaNacimiento', 'direccion', 'genero', 'editar'];

  constructor( public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef, private _snackBar: MatSnackBar, private router: Router, private usuarioService: UsuarioService ) { }

  ngOnInit(): void {

    this.actualizarData();

  }

  actualizarData(){

    this.usuarioService.verTodosPacientes().subscribe( resp =>{

      this.data = new MatTableDataSource(resp.pacientes);
     /*  this.changeDetectorRefs.detectChanges(); */
    
    });

  }

   eliminarPaciente(element: Paciente) {

    const dialogRef = this.dialog.open(AlertDeletePacienteComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if( result===true ) {

        this.usuarioService.eliminarPaciente(element.id)

        var index = this.data.data.map(pacientes => pacientes).indexOf(element);
        this.data.data.splice(index,1);
    
        this.table.renderRows();

        this._snackBar.open('Paciente eliminado correctamente', '', {
          duration: 4000
        });
      }

    }); 

  }

  updatePaciente(element: Paciente) {

    this.router.navigate(['update-paciente', element.id, element.nombre, element.apellido, element.rut, element.fechaNacimiento, element.direccion, element.genero]);

  }

  pacienteCreado(evento) {

    this.data.data.unshift(evento);
    this.table.renderRows();
    this.accordion.closeAll();

  }
  

}
