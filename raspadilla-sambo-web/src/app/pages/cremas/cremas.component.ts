import { Component, inject, OnInit, signal } from '@angular/core';
import { CremaService } from '../../services/crema.service';
import Crema from '../../interfaces/crema';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-cremas',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './cremas.component.html',
})
export class CremasComponent implements OnInit {
  cremaService = inject(CremaService);
  listaCremas = signal<Crema[]>([]);

  displayedColumns: string[] = ['position', 'nombre', 'actions'];

  ngOnInit(): void {
    this.getAllCremas();
  }

  getAllCremas() {
    this.cremaService.getAll().subscribe({
      next: (data: any) => {
        this.listaCremas.set(data);
      },
      error: (err) => {
        alert('Error al obtener las cremas');
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

  getToken(): string {
    return localStorage.getItem('token') || '';
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
