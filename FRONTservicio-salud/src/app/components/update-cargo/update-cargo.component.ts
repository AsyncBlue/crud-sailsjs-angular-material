import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-cargo',
  templateUrl: './update-cargo.component.html',
  styleUrls: ['./update-cargo.component.css']
})
export class UpdateCargoComponent implements OnInit {

  cargo: Cargo = {};

  constructor( private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {

    this.cargo.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cargo.titulo = this.activatedRoute.snapshot.paramMap.get('titulo');
    this.cargo.descripcion = this.activatedRoute.snapshot.paramMap.get('descripcion');

  }

  updateCargo() {

    this.usuarioService.updateCargo(this.cargo);

    this.router.navigate(['cargos-page']);

    this._snackBar.open('Cargo actualizado correctamente', '', {
      duration: 4000
    });

  }

}
