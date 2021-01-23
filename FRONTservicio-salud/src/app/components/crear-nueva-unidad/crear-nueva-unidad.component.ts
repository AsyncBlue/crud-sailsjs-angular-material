import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { unidadAdministrativa } from '../../interfaces/interfaces';

@Component({
  selector: 'app-crear-nueva-unidad',
  templateUrl: './crear-nueva-unidad.component.html',
  styleUrls: ['./crear-nueva-unidad.component.css']
})
export class CrearNuevaUnidadComponent implements OnInit {

  @Output() unidadCreada = new EventEmitter<unidadAdministrativa>();

  registerUnidad = {
    titulo: '',
    descripcion: '',
    unidadPadre: 'INFORMATICA',
  }

  constructor( private usuarioService: UsuarioService, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  crearUnidad() {

    this.registerUnidad.titulo = this.allMayus(this.registerUnidad.titulo);

     const valido = this.usuarioService.crearUnidad( this.registerUnidad );

     if ( valido ) {

      this._snackBar.open('Unidad Administrativa Creada Exitosamentee', '', {
        duration: 3000
      });

      this.unidadCreada.emit(this.registerUnidad);

   
     } else { 
    
       this._snackBar.open('Error al crear Unidad Administrativa', '', {
         duration: 3000
       });
    
     }

  }


  allMayus(string){
    return string.toUpperCase();
  }

}
