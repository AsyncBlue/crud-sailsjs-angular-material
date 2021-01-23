import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { unidadAdministrativa } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { AlertDeleteUnidadComponent } from '../../modals/alert-delete-unidad/alert-delete-unidad.component';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  /* data: Usuario[] = []; */
  data = new MatTableDataSource<unidadAdministrativa>();
  tableColumns: string[] = ['titulo', 'descripcion', 'unidadPadre', 'editar'];

  constructor( private usuarioService: UsuarioService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef, private _snackBar: MatSnackBar, private router: Router ) { }

  ngOnInit(): void {

    this.actualizarData();

  }

  unidadCreada(evento) {

    this.data.data.unshift(evento);
    this.table.renderRows();
    this.accordion.closeAll();

  }

  actualizarData(){

    this.usuarioService.verTodosUnidades().subscribe( resp =>{
      this.data = new MatTableDataSource(resp.unidades);
      this.changeDetectorRefs.detectChanges();
    
    });

  }

   eliminarUnidad(element: unidadAdministrativa) {

    const dialogRef = this.dialog.open(AlertDeleteUnidadComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if( result===true ) {

        this.usuarioService.eliminarUnidad(element.id)

        var index = this.data.data.map(unidad => unidad).indexOf(element);
        this.data.data.splice(index,1);
    
        this.table.renderRows();

        this._snackBar.open('Unidad Administrativa eliminada correctamente', '', {
          duration: 4000
        });
      }

    });

  }

   updateUnidad(element: unidadAdministrativa) {

    this.router.navigate(['update-unidad', element.id, element.titulo, element.descripcion, element.unidadPadre]);

  }


}
