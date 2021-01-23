import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cargo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-crear-nuevo-cargo',
  templateUrl: './crear-nuevo-cargo.component.html',
  styleUrls: ['./crear-nuevo-cargo.component.css']
})
export class CrearNuevoCargoComponent implements OnInit {

  @Output() cargoCreado = new EventEmitter<Cargo>();

  registerCargo = {
    titulo: '',
    descripcion: ''
  }

  constructor( private usuarioService: UsuarioService, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  crearCargo() {

    this.registerCargo.titulo = this.allMayus(this.registerCargo.titulo);

     const valido = this.usuarioService.crearCargo( this.registerCargo );

     if ( valido ) {

      this._snackBar.open('Cargo creado Exitosamentee', '', {
        duration: 3000
      });

      this.cargoCreado.emit(this.registerCargo);

   
     } else { 
    
       this._snackBar.open('Error al crear Cargo', '', {
         duration: 3000
       });
    
     }

  }


  allMayus(string){
   return string.toUpperCase();
  }

}
