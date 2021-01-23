import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { RespuestaLogin, Usuario, RespuestaVerTodosUsuarios, Paciente, RespuestaVerTodosPacientes, unidadAdministrativa, RespuestaVerTodosUnidades, Cargo, RespuestaVerTodosCargos, RespuestaRegistroSesiones } from '../interfaces/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  usuario: Usuario = {};

  constructor( private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) { }

  login( rut: string, password: string ) {

    const data = { rut, password };

    return new Promise( resolve =>{

      this.http.post<RespuestaLogin>(`${URL}/auth/login`, data).subscribe( async resp =>{
  
         if ( resp['usuario'] ) {
          await this.guardarToken( resp['token'] );
          this.router.navigate(['/mi-perfil-page']);
          resolve(true);

        } else if(resp['error']) {

          this._snackBar.open('RUT y/o Contraseña Incorrecta', '', {
            duration: 3000
          });

          this.token = null;
          localStorage.clear();
          resolve(false);

        } else {
          this.token = null;
          localStorage.clear();
          resolve(false);
        }
  
      });

    });

  }

  registro( usuario: Usuario ) {

    return new Promise( resolve => {

      this.http.post(`${URL}/auth/signup`, usuario).subscribe( async resp =>{

        if ( resp['ok'] ) {

          await this.guardarToken( resp['token'] );
          this.router.navigate(['/mi-perfil-page']);
          resolve(true);

        } else if (resp['existe']) {

          this._snackBar.open('RUT ingresado ya existe en el sistema', '', {
            duration: 3000
          });

          this.token = null;
          localStorage.clear();
          resolve(false);

        } else {
          this.token = null;
          localStorage.clear();
          resolve(false);
        }
         
      });

    });

  }

  async guardarToken( token: string ){

    this.token = token;
    await localStorage.setItem('token', token);

     await this.validaToken();

  }

  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if ( !this.token ) {
      this.router.navigate(['/auth/login']);
      return Promise.resolve(false);
    }

    return new Promise<boolean>( resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${URL}/usuario/verUsuario`, { headers }).subscribe( resp => {
        if ( resp['ok'] ) {
          this.usuario = resp['usuario'];
          resolve(true);
        } else {
          this.router.navigate(['/login']);;
          resolve(false);
        }

      });

    });

  }

  async cargarToken() {

    this.token = await localStorage.getItem('token') || null;

  }

  logout() {

    this.token = null; // limpia el token
    this.usuario = null; // limpia el usuario
    localStorage.clear(); // limpia el storage
    this.router.navigate(['/login']);

  }

  verUsuario() {

    if (!this.usuario.id) {
      this.validaToken();
    }

    return { ...this.usuario };

  }

  actualizarPass( usuario: Usuario) {
   
    const headers = new HttpHeaders( {
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.patch(`${URL}/usuario/updatePass`, usuario, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {
          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  registroSesion (sesion: Date, usuarioID: string) {

    const data = { usuarioID: usuarioID, sesion: sesion};

    const headers = new HttpHeaders( {
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/registroSesiones/guardarSesion`, data, { headers }).subscribe( async resp => {

        if ( resp['ok'] ) {
          /* this.guardarToken( resp['token'] ); */
          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  verTodosUsuarios() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaVerTodosUsuarios>(`${URL}/usuario/verTodosFuncionarios`, {headers});

  }

  crearFuncionario( usuario: Usuario ) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/usuario/crearFuncionario`, usuario, {headers}).subscribe( async resp =>{

        if ( resp['ok'] ) {
          resolve(true);
        } else if (resp['existe']) {
          this._snackBar.open('RUT INGRESADO YA EXISTE EN EL SISTEMA', '', {
            duration: 3000
          });
          resolve(false);
        } 
        else {
          resolve(false);
        }
         
      });

    });

  }

  eliminarFuncionario(id) {

    var funcionario = {
      id: id
    }

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/usuario/eliminarFuncionario`, funcionario, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {
 /*          this.guardarToken( resp['token'] ); */
          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  updateFuncionario( usuario: Usuario) {

    const headers = new HttpHeaders( {
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.patch(`${URL}/usuario/updateFuncionario`, usuario, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {
         /*  this.guardarToken( resp['token'] ); */
          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  crearPaciente( paciente: Paciente ) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/paciente/crearPaciente`, paciente, {headers}).subscribe( resp =>{

        if ( resp['ok'] ) {

          resolve(true);

        } else if(resp['existe']) {
          
          this._snackBar.open('RUT ingresado del Paciente ya existe en el sistema', '', {
            duration: 3000
          });

          resolve(false);

        } else {
          resolve(false);
        }
         
      });

    });

  }

  verTodosPacientes() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaVerTodosPacientes>(`${URL}/paciente/verTodosPacientes`, {headers});

  }

  eliminarPaciente(id) {

    var paciente = {
      id: id
    }

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/paciente/eliminarPaciente`, paciente, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {
          /* this.guardarToken( resp['token'] ); */
          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  updatePaciente( paciente: Paciente) {

    const headers = new HttpHeaders( {
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.patch(`${URL}/paciente/updatePaciente`, paciente, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {
         /*  this.guardarToken( resp['token'] ); */
          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  crearUnidad( unidad: unidadAdministrativa ) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/unidadAdministrativa/crearUnidad`, unidad, {headers}).subscribe( resp =>{

        if ( resp['ok'] ) {
          resolve(true);
        } else {
          resolve(false);
        }
         
      });

    });

  }

  verTodosUnidades() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaVerTodosUnidades>(`${URL}/unidadAdministrativa/verTodosUnidades`, {headers});

  }

  updateUnidad( unidad: unidadAdministrativa) {

    const headers = new HttpHeaders( {
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.patch(`${URL}/unidadAdministrativa/updateUnidad`, unidad, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {

          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  eliminarUnidad(id) {

    var unidad = {
      id: id
    }

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/unidadAdministrativa/eliminarUnidad`, unidad, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {
          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  crearCargo( cargo: Cargo ) {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/cargo/crearCargo`, cargo, {headers}).subscribe( async resp =>{

        if ( resp['ok'] ) {
          resolve(true);
        } else {
          resolve(false);
        }
         
      });

    });

  }

  verTodosCargos() {

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.get<RespuestaVerTodosCargos>(`${URL}/cargo/verTodosCargos`, {headers});

  }

  updateCargo( cargo: Cargo) {

    const headers = new HttpHeaders( {
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.patch(`${URL}/cargo/updateCargo`, cargo, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {

          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  eliminarCargo(id) {

    var cargo = {
      id: id
    }

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/cargo/eliminarCargo`, cargo, { headers }).subscribe( resp => {

        if ( resp['ok'] ) {
          resolve(true);
        } else {
          resolve(false);
        }
  
      });

    });

  }

  registroSesiones(usuario: string) {

    var data = {id: usuario};

    const headers = new HttpHeaders({
      'x-token': this.token
    });

    return this.http.post<RespuestaRegistroSesiones>(`${URL}/registroSesiones/registrosUsuario`, data, {headers});
  

  }



}
