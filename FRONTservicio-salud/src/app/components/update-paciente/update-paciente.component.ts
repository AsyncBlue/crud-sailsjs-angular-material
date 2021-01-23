import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-paciente',
  templateUrl: './update-paciente.component.html',
  styleUrls: ['./update-paciente.component.css']
})
export class UpdatePacienteComponent implements OnInit {

  paciente: Paciente = {};

  generoList = ['Masculino', 'Femenino'];

  beforeNaci = {
    dia: '',
    mes: '',
    ano: ''
  }

  constructor( private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {

    this.paciente.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.paciente.nombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.paciente.apellido = this.activatedRoute.snapshot.paramMap.get('apellido');
    this.paciente.rut = this.activatedRoute.snapshot.paramMap.get('rut');
    this.paciente.fechaNacimiento = this.activatedRoute.snapshot.paramMap.get('fechaNacimiento');
    this.paciente.direccion = this.activatedRoute.snapshot.paramMap.get('direccion');
    this.paciente.genero = this.activatedRoute.snapshot.paramMap.get('genero');
    this.beforeNaci.dia = this.paciente.fechaNacimiento.slice(0, 2);
    this.beforeNaci.mes = this.paciente.fechaNacimiento.slice(3, 5);
    this.beforeNaci.ano = this.paciente.fechaNacimiento.slice(6, 10);

  }

  updatePaciente() {

    this.paciente.fechaNacimiento = this.beforeNaci.dia + '-' + this.beforeNaci.mes + '-' + this.beforeNaci.ano;

    this.usuarioService.updatePaciente(this.paciente);

    this.router.navigate(['pacientes-page']);

    this._snackBar.open('Paciente actualizado correctamente', '', {
      duration: 4000
    });

  }

}
