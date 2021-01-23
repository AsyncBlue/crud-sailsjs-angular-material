import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService, private router: Router ) { }

  ngOnInit(): void {

    this.usuario = this.usuarioService.verUsuario();

  }

  logout() {
    this.usuarioService.logout();
  }


}
