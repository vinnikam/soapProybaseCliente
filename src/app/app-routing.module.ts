import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EquiposComponent} from "./componentes/equipos/equipos.component";


const routes:  Routes = [
  {path: '', component: EquiposComponent, pathMatch: 'full'},
  {path: 'principal', component: EquiposComponent}


  //{path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
