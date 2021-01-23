import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { unidadAdministrativa } from '../../interfaces/interfaces';

@Component({
  selector: 'app-update-unidad',
  templateUrl: './update-unidad.component.html',
  styleUrls: ['./update-unidad.component.css']
})
export class UpdateUnidadComponent implements OnInit {

  unidad: unidadAdministrativa = {};

  constructor( private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {

    this.unidad.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.unidad.titulo = this.activatedRoute.snapshot.paramMap.get('titulo');
    this.unidad.descripcion = this.activatedRoute.snapshot.paramMap.get('descripcion');
    this.unidad.unidadPadre = this.activatedRoute.snapshot.paramMap.get('unidadPadre');

  }

  updateUnidad() {

    this.usuarioService.updateUnidad(this.unidad);

    this.router.navigate(['unidades-page']);

    this._snackBar.open('Unidad Administrativa actualizada correctamente', '', {
      duration: 4000
    });

  }

}
