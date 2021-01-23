import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario, Cargo, unidadAdministrativa } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-funcionario',
  templateUrl: './update-funcionario.component.html',
  styleUrls: ['./update-funcionario.component.css']
})
export class UpdateFuncionarioComponent implements OnInit {

  perfilList = ['super_admin', 'admin', 'user'];

  unidadAdministrativaList: unidadAdministrativa[] = [];

  cargoList: Cargo[] = [];

  funcionario: Usuario = {};

  constructor( private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {

    this.funcionario.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.funcionario.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.funcionario.apellido = this.activatedRoute.snapshot.paramMap.get('apellido');
    this.funcionario.rut = this.activatedRoute.snapshot.paramMap.get('rut');
    this.funcionario.perfil = this.activatedRoute.snapshot.paramMap.get('perfil');
    this.funcionario.unidadAdministrativa = this.activatedRoute.snapshot.paramMap.get('unidadAdministrativa');
    this.funcionario.cargo = this.activatedRoute.snapshot.paramMap.get('cargo');

    this.usuarioService.verTodosCargos().subscribe( resp =>{
        
        this.cargoList.push(...resp.cargos);
  
    });

    this.usuarioService.verTodosUnidades().subscribe( resp =>{

      this.unidadAdministrativaList.push(...resp.unidades);
    
    });

  }

  updateFuncionario() {

    this.usuarioService.updateFuncionario(this.funcionario);

    this.router.navigate(['funcionarios-page']);

    this._snackBar.open('Funcionario actualizado correctamente', '', {
      duration: 4000
    });

  }

}
