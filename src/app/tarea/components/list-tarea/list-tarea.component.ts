import { Component, OnInit, inject } from '@angular/core';
import { AddTareaComponent } from "../add-tarea/add-tarea.component";
import { Tarea } from '../../interface/tarea.interface';
import { TareaService } from '../../services/tarea.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent, RouterModule],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent implements OnInit {

  ngOnInit(): void {

    this.tareaService.getTareas().subscribe(
      {
        next: (tareas: Tarea[]) => {
          this.lista = tareas
        }
      }
    )

  }

  tareaService = inject(TareaService);

  lista: Tarea[] = [];


  traerTareas() {
    this.tareaService.getTareas().subscribe(
      {
        next: (tareas: Tarea[]) => {
          this.lista = tareas;
        },
        error: () => {
          console.log('Error');
        }
      }
    )
  }


  addListaTarea(tarea: Tarea) {
    const t = structuredClone(tarea)
    this.lista.push(t);
  }


  eliminarTarea(id: string) {
    this.tareaService.deleteTarea(id).subscribe({
      next: () => {
        this.traerTareas()
      },
      error: (err) => {
        console.log('Ha ocurrido un error', err)
      }
    })
  }

}
