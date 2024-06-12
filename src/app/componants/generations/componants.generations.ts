import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

interface Generation {
  id: number;
  name: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './componants.generations.html',
  styleUrl: './header.component.scss'
})

export class GenerationsComponent implements OnInit {
  generations: Generation[] = [
    { id: 1, name: 'Génération I' },
    { id: 2, name: 'Génération II' },
    { id: 3, name: 'Génération III' },
    { id: 4, name: 'Génération IV' },
    { id: 5, name: 'Génération V' },
    { id: 6, name: 'Génération VI' },
    { id: 7, name: 'Génération VII' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getGenerationName(generationId: number) {
    return this.generations.find(generation => generation.id === generationId)?.name;
  }
}
