import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario, Cargo, unidadAdministrativa } from '../../interfaces/interfaces';

@Component({
  selector: 'app-crear-nuevo-funcionario',
  templateUrl: './crear-nuevo-funcionario.component.html',
  styleUrls: ['./crear-nuevo-funcionario.component.css']
})
export class CrearNuevoFuncionarioComponent implements OnInit {

  @Output() funcionarioCreado = new EventEmitter<Usuario>();

  perfilList = ['super_admin', 'admin', 'user'];

  unidadAdministrativaList: unidadAdministrativa[] = [];

  cargoList: Cargo[] = [];

  registerUser = {
    nombre: '',
    apellido: '',
    rut: '',
    password: '',
    perfil: '',
    unidadAdministrativa: '',
    cargo: ''
  }

  rutCompleto;

  constructor( private usuarioService: UsuarioService, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {

    this.usuarioService.verTodosCargos().subscribe( resp =>{
        
      this.cargoList.push(...resp.cargos);

  });

  this.usuarioService.verTodosUnidades().subscribe( resp =>{

    this.unidadAdministrativaList.push(...resp.unidades);
  
  });

  }

  registro() {

    this.registerUser.nombre = this.primeraMayuscula(this.registerUser.nombre);
    this.registerUser.apellido = this.primeraMayuscula(this.registerUser.apellido);
    this.registerUser.password = this.generarPass(this.registerUser.rut);

    this.rutCompleto = this.validaRut(this.registerUser.rut);

    if ( this.rutCompleto === true  ) {

      const valido = this.usuarioService.crearFuncionario( this.registerUser ).then(resp => {

        if(resp) {
          this._snackBar.open('Funcionario Creado Exitosamentee', '', {
            duration: 3000
          });
    
          this.funcionarioCreado.emit(this.registerUser);
        }
      })

    } else { 
    
      this._snackBar.open('RUT INGRESADO NO ES VALIDO', '', {
        duration: 3000
      });
    };

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
