import { Component, inject, OnInit, signal } from '@angular/core';
import { CremaService } from '../../services/crema.service';
import Crema from '../../interfaces/crema';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cremas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cremas.component.html',
  styleUrl: './cremas.component.scss',
})
export class CremasComponent implements OnInit {
  cremaService = inject(CremaService);
  listaCremas = signal<Crema[]>([]);

  ngOnInit(): void {
    this.getAllCremas();
  }

  getAllCremas() {
    this.cremaService.getAll().subscribe({
      next: (data: any) => {
        this.listaCremas.set(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  nuevaCrema: Omit<Crema, 'id'> = { nombre: '' };
  crearCrema(nuevaCrema: Crema) {
    this.cremaService.post(nuevaCrema).subscribe({
      next: (response: any) => {
        console.log('Crema creada con éxito', response);
        // Actualiza la lista de cremas si es necesario
        this.getAllCremas();
      },
      error: (err: any) => {
        console.log('Error al crear crema', err);
      },
    });
  }

  deleteCrema(id: number) {
    this.cremaService.delete(id).subscribe({
      next: (response: any) => {
        console.log('Se elimino la crema', response);
        this.getAllCremas();
      },
      error: (err: any) => {
        console.log('Error al eliminar la crema', err);
      },
    });
  }
}
