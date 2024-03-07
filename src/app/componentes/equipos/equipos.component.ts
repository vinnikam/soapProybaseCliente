import { Component, OnInit } from '@angular/core';
import {Equipo} from "../../vo/equipo";
import {EquiposService} from "../../servicios/equipos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipos: Equipo[] | undefined
  constructor(private equipoService: EquiposService,  private router: Router) { }

  ngOnInit(): void {
    this.cargarEquipos();
  }

  private cargarEquipos() {
    this.equipoService.list().subscribe(
      data => {
        this.equipos = data;

      },
      (err) => {
        console.log(err)


      }
    )
  }
}
