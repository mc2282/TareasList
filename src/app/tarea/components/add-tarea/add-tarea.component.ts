import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject } from '@angular/core';
import { Tarea } from '../../interface/tarea.interface';
import { Output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

  @Output()
  emitirTarea = new EventEmitter<Tarea>()

  fb = inject(FormBuilder)

  tareaService = inject(TareaService)

  //formulario tiene tipo de dato formgroup
  formulario: FormGroup = this.fb.nonNullable.group({
    id: ['', [Validators.required]],
    tarea: ['', [Validators.required, Validators.minLength(3)]]
  })

  enviar() {
    if (this.formulario.valid) {
      const data = this.formulario.getRawValue();
      console.log(data)
      this.agregarTarea(data)
      this.emitirTarea.emit(data)
    }
  }

  agregarTarea(tarea: Tarea) {
    this.tareaService.postTarea(tarea).subscribe({
      next: (tarea: Tarea) => {
        console.log('La tarea fue agregada', tarea);
      },
      error: err => {
        console.log('sucedio un error', err);
      }
    })
  }
}
