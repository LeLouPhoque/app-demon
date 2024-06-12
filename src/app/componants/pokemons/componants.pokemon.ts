import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgForOf} from "@angular/common";
import {GenerationsComponent} from "../generations/componants.generations";


interface Pokemons{
  id: number;
  name: string;
  description: string;
  height?: string ;
  weight?: string ;
  generationId: number
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './componants.pokemons.html',
  styleUrl: './header.component.scss'
})

export class ComponantsPokemon extends GenerationsComponent implements OnInit {
  pokemons: Pokemons[] = [
    {
      id: 1,
      name: 'Bulbizarre',
      description: 'une graine de type plante et poison',
      height: '70 centimètres',
      weight: '6,9 kilogrammes',
      generationId: 1
    },
    {
      id: 2,
      name: 'Herbizarre',
      description: 'une graine de type plante et poison',
      height: '1 mètre',
      weight: '13 kilogrammes',
      generationId: 1

    },
    {
      id: 3,
      name: 'Florizarre',
      description: 'une graine de type plante et poison',
      height: '2 mètres',
      weight: '100 kilogrammes',
      generationId: 1
    },
    {
      id: 4,
      name: 'Salamèche',
      description: 'un lézard de type feu',
      height: '60 centimètres',
      weight: '8,5 kilogrammes',
      generationId: 2
    },
    {
      id: 5,
      name: 'Reptincel',
      description: 'une flamme de type feu',
      height: '1,1 mètre',
      weight: '19 kilogrammes',
      generationId: 1

    },
    {
      id: 6,
      name: 'Dracaufeu',
      description: 'une flamme de type feu et vol',
      height: '1,7 mètre',
      weight: '90,5 kilogrammes',
      generationId: 1

    },
    {
      id: 7,
      name: 'Sans poids ni taille',
      description: 'un Pokémon sans poids ni taille renseignés',
      generationId: 1

    }
  ];

  constructor() {
    super(); // Appelle le constructeur de GenerationsComponent
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
