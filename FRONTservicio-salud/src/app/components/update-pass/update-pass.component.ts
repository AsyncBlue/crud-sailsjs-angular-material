import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import { AlertUpdatePassComponent } from '../../modals/alert-update-pass/alert-update-pass.component';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.css']
})
export class UpdatePassComponent implements OnInit {

  usuario: Usuario = {};

  newPass = {
    pass1: '',
    pass2: ''
  }

  constructor( public dialog: MatDialog, private _snackBar: MatSnackBar, private usuarioService: UsuarioService ) { }

  ngOnInit(): void {

    this.usuario = this.usuarioService.verUsuario();

  }

  async actualizarPass( fActualizarPass: NgForm ) {

    if ( fActualizarPass.invalid ) { return; }

    if ( this.newPass.pass1 === this.newPass.pass2 ) {

       const dialogRef = this.dialog.open(AlertUpdatePassComponent);

       dialogRef.afterClosed().subscribe(result => { 

         if( result===true ) { 

           this.usuario.password = this.newPass.pass1;

           this.usuarioService.actualizarPass( this.usuario ); 

          this._snackBar.open('Contraseña Actualizada Correctamente', '', {
            duration: 3000
          });

         } 

       });

    } else {

      this._snackBar.open('Error al actualizar, al parecer las nuevas contraseñas no son iguales', '', {
        duration: 3000
      });

    }

  /*   fActualizarPass.reset(); */
    
  }

}
