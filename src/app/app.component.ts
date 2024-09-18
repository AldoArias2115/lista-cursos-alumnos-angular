import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TablaCursoComponent } from './components/tabla-curso/tabla-curso.component';
import { TablaAlumnoComponent } from './components/tabla-alumno/tabla-alumno.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TablaCursoComponent,
    TablaAlumnoComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cursos: boolean = true;

  handleCambio() {
    this.cursos = !this.cursos;
  }
}
