import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page/home-page.component';
import { Component } from '@angular/core';
import { UpdateTareaPageComponent } from './pages/update-tarea-page/update-tarea-page.component';

export const routes: Routes = [
  {//renderizamos paginas
    path: '',
    component: HomePageComponent
  },
  {
    path: "update/:idTarea",
    component: UpdateTareaPageComponent,
  },
  {
    path: "put/:idTarea",
    component: UpdateTareaPageComponent,
  },
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }

];
