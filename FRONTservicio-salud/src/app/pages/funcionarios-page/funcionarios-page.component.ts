import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-funcionarios-page',
  templateUrl: './funcionarios-page.component.html',
  styleUrls: ['./funcionarios-page.component.css']
})
export class FuncionariosPageComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
    
  }

}
