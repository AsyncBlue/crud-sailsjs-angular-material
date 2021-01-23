import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cargo } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { AlertDeleteCargoComponent } from 'src/app/modals/alert-delete-cargo/alert-delete-cargo.component';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  /* data: Usuario[] = []; */
  data = new MatTableDataSource<Cargo>();
  tableColumns: string[] = ['titulo', 'descripcion', 'editar'];

  constructor( private usuarioService: UsuarioService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef, private _snackBar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {

    this.actualizarData();

  }

  cargoCreado(evento) {

    this.data.data.unshift(evento);
    this.table.renderRows();
    this.accordion.closeAll();

  }

  actualizarData(){

    this.usuarioService.verTodosCargos().subscribe( resp =>{
      this.data = new MatTableDataSource(resp.cargos);
      this.changeDetectorRefs.detectChanges();
    
    });

  }

  eliminarCargo(element: Cargo) {

    const dialogRef = this.dialog.open(AlertDeleteCargoComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if( result===true ) {

        this.usuarioService.eliminarCargo(element.id)

        var index = this.data.data.map(cargo => cargo).indexOf(element);
        this.data.data.splice(index,1);
    
        this.table.renderRows();

        this._snackBar.open('Cargo eliminado correctamente', '', {
          duration: 4000
        });
      }

    });

  }

   updateCargo(element: Cargo) {

    this.router.navigate(['update-cargo', element.id, element.titulo, element.descripcion]);

  }

}
