import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { CommonModule } from '@angular/common';
import { Curso } from '../../models/curso-to';

@Component({
  selector: 'app-tabla-curso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-curso.component.html',
  styleUrl: './tabla-curso.component.css',
})
export class TablaCursoComponent implements OnInit {
  public cursos?: Curso[];

  ngOnInit(): void {
    this.cursos = cursos;
  }
}
