import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './componants.generations.html',
  styleUrl: './header.component.scss'
})
export class GenerationsComponent  implements OnInit {
  generations: string[] = [
    'Génération I',
    'Génération II',
    'Génération III',
    'Génération IV',
    'Génération V',
    'Génération VI',
    'Génération VII'
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
