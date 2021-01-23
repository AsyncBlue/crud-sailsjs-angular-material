import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  perfilList = ['super_admin', 'admin', 'user'];

  loginUser = {
    rut: '',
    password: ''
  };

  registerUser = {
    nombre: '',
    apellido: '',
    rut: '',
    perfil: '',
    password: ''
  }

  rutCompleto;

  constructor( private _snackBar: MatSnackBar, private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  }

  async login(fLogin: NgForm) {
 
    if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.rut, this.loginUser.password );

    if ( valido ) {
      this._snackBar.open('Bienvenido', '', {
        duration: 3000
      });
    } else {
      this._snackBar.open('RUT y/o Password no son correctos', '', {
        duration: 3000
      });
    }

  }

  async registro(fRegistro: NgForm) {

     if ( fRegistro.invalid ) { return; }

     this.registerUser.nombre = this.primeraMayuscula(this.registerUser.nombre);
     this.registerUser.apellido = this.primeraMayuscula(this.registerUser.apellido);
     this.registerUser.password = this.generarPass(this.registerUser.rut);

     this.rutCompleto = this.validaRut(this.registerUser.rut);
  
     if ( this.rutCompleto === true ) {

      const valido = await this.usuarioService.registro( this.registerUser );

      if (valido) {
        
        this.router.navigate(['/mi-perfil-page']);

        this._snackBar.open('Usuario creado correctamente', '', {
          duration: 3000
        });

      }

     } else {
     
       this._snackBar.open('RUT ingresado es INVALIDO', '', {
         duration: 3000
       });

     }

   }

   primeraMayuscula(string){
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }

  generarPass(string) {
    return string.slice(0,4);
  }

  validaRut(rutCompleto) {
		rutCompleto = rutCompleto.replace("‐","-");
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		
		return (this.dv(rut) == digv );
  }
  
	dv (T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}


}
