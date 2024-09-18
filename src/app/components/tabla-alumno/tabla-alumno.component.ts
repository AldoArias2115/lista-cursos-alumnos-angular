import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { CommonModule } from '@angular/common';
import { Alumno } from '../../models/alumno-to';

@Component({
  selector: 'app-tabla-alumno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-alumno.component.html',
  styleUrl: './tabla-alumno.component.css',
})
export class TablaAlumnoComponent implements OnInit {
  public alumnos?: Alumno[];

  ngOnInit(): void {
    this.alumnos = alumnos;
  }
}
