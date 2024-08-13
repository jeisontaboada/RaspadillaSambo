import { Component, inject, OnInit, signal } from '@angular/core';
import { TallaService } from '../../services/talla.service';
import Talla from '../../interfaces/talla';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tallas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tallas.component.html',
  styleUrl: './tallas.component.scss',
})
export class TallasComponent implements OnInit {
  tallaServices = inject(TallaService);
  listaTalla = signal<Talla[]>([]);
  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.getAllTallas();
  }

  getAllTallas() {
    this.tallaServices.getAll().subscribe({
      next: (data: any[]) => {
        const sorted = data.sort((a, b) => a.id - b.id);
        this.listaTalla.set(sorted);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  crearTalla() {
    if (!this.formulario.valid) {
      alert('invalido');
      return;
    }

    const nombre = this.formulario.controls.nombre.value;
    const body = { nombre: nombre };
    this.tallaServices.post(body).subscribe({
      next: (response: any) => {
        console.log('La crema ha sido creada con exito', response);
        this.formulario.reset()
        this.getAllTallas();
      },

      error: (err: any) => {
        alert("No se pudo crear")
        console.log('Erros al crear la crema', err?.message);
      },
    });
  }

  deteleTalla(id: number) {
    this.tallaServices.detele(id).subscribe({
      next: (response: any) => {
        console.log('Se elimino correctamente ', response);
        this.getAllTallas();
      },
      error: (err: any) => {
        console.log('Error al eliminar la talla', err);
      },
    });
  }

  tallaActualizada: Talla = { nombre: '' };

  editarTalla(id: number, tallaActualizada: Talla) {
    console.log('Actualizando talla con ID:', id, 'y datos:', tallaActualizada);
    this.tallaServices.update(id, tallaActualizada).subscribe({
      next: () => {
        console.log('Talla actualizada con éxito');
        this.getAllTallas();
      },
      error: (err: any) => {
        console.log('Error actualizando la talla', err);
      },
    });
  }

  setTallaActualizada(item: Talla) {
    this.tallaActualizada = { ...item };
  }

  onSubmit(): void {
    if (this.tallaActualizada.id != null) {
      this.editarTalla(this.tallaActualizada.id, this.tallaActualizada);
    } else {
      console.error('El ID de la talla no está definido');
    }
  }
}
