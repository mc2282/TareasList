import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../../interface/tarea.interface';

@Component({
  selector: 'app-update-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-tarea.component.html',
  styleUrl: './update-tarea.component.css'
})
export class UpdateTareaComponent implements OnInit {

  //carga datos al cargarse el componente
  ngOnInit(): void {
    console.log('se cargo')
    this.activatedRoute.paramMap.subscribe(
      {
        next: (params) => {
          //console.log(params);
          this.id = params.get('idTarea')
          //console.log(this.id);
          this.tareaService.getTarea(this.id).subscribe(
            {
              next: (tarea: Tarea) => {
                //console.log(tarea);
                this.formulario.get('id')?.setValue(tarea.id);
                this.formulario.get('tarea')?.setValue(tarea.tarea)
              }
            }
          )
        }
      })
  }

  id: string | null = '';

  fb = inject(FormBuilder)

  formulario = this.fb.nonNullable.group(
    {
      id: ['', [Validators.required]],
      tarea: ['', [Validators.required]]
    }
  )
  activatedRoute = inject(ActivatedRoute)
  tareaService = inject(TareaService)
  router = inject(Router)


  onUpdateTarea() {
    if (this.formulario.valid) {
      //creamos la tarea
      const tarea = this.formulario.getRawValue();
      console.log(tarea)
      //y la actualizamos
      this.tareaService.putTarea(tarea.id, tarea).subscribe(
        {
          next: () => {
            console.log('La tarea se actualizo')
            this.router.navigateByUrl('/')
          },
          error: (err: Error) => {
            console.log(err.message)
          }
        }
      )

    }
  }
}
