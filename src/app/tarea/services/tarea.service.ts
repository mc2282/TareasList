import { environment } from './../../../environments/environment.development';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../interface/tarea.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TareaService {

  http = inject(HttpClient)

  urlBase = environment.urlBase;

  // Obtener tareas
  getTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.urlBase)
  }

  // Obtener una sola tarea
  getTarea(id: string | null): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.urlBase}/${id}`)
  }

  // Crear una tarea
  postTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.urlBase, tarea)
  }

  // Editar una tarea
  putTarea(id: string | null, tarea: Tarea) {
    return this.http.put<Tarea>(`${this.urlBase}/${id}`, tarea)
  }

  //Borrar una tarea
  deleteTarea(id: string) {
    return this.http.delete<Tarea>(`${this.urlBase}/${id}`)
  }

}
