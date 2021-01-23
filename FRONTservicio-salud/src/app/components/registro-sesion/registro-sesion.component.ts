import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistroSesion } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-registro-sesion',
  templateUrl: './registro-sesion.component.html',
  styleUrls: ['./registro-sesion.component.css']
})
export class RegistroSesionComponent implements OnInit {

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  usuarioID: string;

  registroBonito = [];

  data = new MatTableDataSource<RegistroSesion>();
  tableColumns: string[] = ['dia', 'mes', 'ano', 'hora'];

  constructor( private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService ) { }

  ngOnInit(): void {

    this.usuarioID = this.activatedRoute.snapshot.paramMap.get('id');

    this.usuarioService.registroSesiones(this.usuarioID).subscribe( resp => {

      resp.registro.forEach( element => {
        this.fechaDecode(element.fecha); 
      });

      this.data = new MatTableDataSource(this.registroBonito);

    });

  }

  fechaDecode(fecha:string) {
    
    var fechaMod = {dia:'', mes: '', ano: '', hora: ''};

    fechaMod.ano = fecha.slice(0,4);
    fechaMod.mes = fecha.slice(5,7);
    fechaMod.dia = fecha.slice(8,10);
    fechaMod.hora = fecha.slice(12,16)

    this.registroBonito.push(fechaMod);

  }

}
