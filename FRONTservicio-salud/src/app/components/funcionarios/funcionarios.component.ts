import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import {MatAccordion} from '@angular/material/expansion';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AlertDeleteFuncionarioComponent } from 'src/app/modals/alert-delete-funcionario/alert-delete-funcionario.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';


@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  /* data: Usuario[] = []; */
  data = new MatTableDataSource<Usuario>();
  tableColumns: string[] = ['nombre', 'apellido', 'rut', 'perfil', 'unidadAdministrativa', 'cargo', 'registro', 'editar'];


  constructor( private usuarioService: UsuarioService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef, private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {

    this.actualizarData();

  }

  funcionarioCreado(evento) {

    /* this.actualizarData(); */
    this.data.data.unshift(evento);
    this.table.renderRows();
    this.accordion.closeAll();

  }

  actualizarData(){

    this.usuarioService.verTodosUsuarios().subscribe( resp =>{

      this.data = new MatTableDataSource(resp.funcionarios);
      this.changeDetectorRefs.detectChanges();
    
    });

  }

  eliminarFuncionario(element: Usuario) {

    const dialogRef = this.dialog.open(AlertDeleteFuncionarioComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if( result===true ) {

        this.usuarioService.eliminarFuncionario(element.id)

        var index = this.data.data.map(funcionario => funcionario).indexOf(element);
        this.data.data.splice(index,1);
    
        this.table.renderRows();

        this._snackBar.open('Funcionario eliminado correctamente', '', {
          duration: 4000
        });
      }

    }); 

  }

  updateFuncionario(element: Usuario) {

    this.router.navigate(['update-funcionario', element.id, element.nombre, element.apellido, element.rut, element.perfil, element.unidadAdministrativa, element.cargo]);

  }

  registroSesiones(element:Usuario) {
    this.router.navigate(['registro-sesion', element.id]);
  }



}
