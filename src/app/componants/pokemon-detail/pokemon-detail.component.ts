  // pokemon-detail.component.ts

  import { Component, Input, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { PokemonService } from '../../service/pokemon.service';
  import {NgForOf, NgIf} from "@angular/common";
  import {Pokemon} from "../../service/pokemon"; // Assurez-vous d'importer correctement votre service

  @Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html',
    standalone: true,
    imports: [
      NgForOf,
      NgIf
    ],
    styleUrls: ['./pokemon-detail.component.scss']
  })
  export class PokemonDetailComponent implements OnInit {
    @Input() selectedPokemonId: number | undefined;
    selectedPokemon: Pokemon | undefined;

    constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
    ) { }


    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.selectedPokemonId = Number(params.get('id'));
        if (this.selectedPokemonId) {
          this.pokemonService.getPokemon(this.selectedPokemonId).subscribe(pokemon => {
            this.selectedPokemon = pokemon;
          });
        }
      });
    }
  }
