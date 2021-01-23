import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Paciente } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-crear-nuevo-paciente',
  templateUrl: './crear-nuevo-paciente.component.html',
  styleUrls: ['./crear-nuevo-paciente.component.css']
})
export class CrearNuevoPacienteComponent implements OnInit {

  @Output() pacienteCreado = new EventEmitter<Paciente>();

  generoList = ['Masculino', 'Femenino'];

  registerPaciente = {
    nombre: '',
    apellido: '',
    rut: '',
    fechaNacimiento: '',
    direccion: '',
    genero: ''
  }

  beforeNaci = {
    dia: '',
    mes: '',
    ano: ''
  }

  rutCompleto;

  constructor( private _snackBar: MatSnackBar, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
  }

  crearPaciente() {

    this.registerPaciente.nombre = this.primeraMayuscula(this.registerPaciente.nombre);
    this.registerPaciente.apellido = this.primeraMayuscula(this.registerPaciente.apellido);
    this.registerPaciente.fechaNacimiento = this.beforeNaci.dia + '-' + this.beforeNaci.mes + '-' + this.beforeNaci.ano;

    this.rutCompleto = this.validaRut(this.registerPaciente.rut);

     if ( this.rutCompleto === true ) {

      const valido = this.usuarioService.crearPaciente( this.registerPaciente ).then( resp => {

        if (resp) {

          this._snackBar.open('Paciente Creado Exitosamentee', '', {
            duration: 3000
          });
    
          this.pacienteCreado.emit(this.registerPaciente);
  
        }

      });

     } else { 
    
       this._snackBar.open('RUT INGRESADO NO ES VALIDO', '', {
         duration: 3000
       });
    
     }

  }


 primeraMayuscula(string){
   return string.charAt(0).toUpperCase() + string.slice(1); 
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
