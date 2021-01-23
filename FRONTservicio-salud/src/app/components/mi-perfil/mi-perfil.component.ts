import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  usuario: Usuario = {};

  avatar = 'avatar.png';

  registroSesion: Date;

  constructor( private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit(): void {

    this.usuario = this.usuarioService.verUsuario();

    this.registroSesion = new Date;

    this.usuarioService.registroSesion(this.registroSesion, this.usuario.id);

  }

  verRegistro(){
    this.router.navigate(['registro-sesion', this.usuario.id]);
  }

}
