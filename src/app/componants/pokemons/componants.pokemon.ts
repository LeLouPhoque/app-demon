import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NgForOf} from "@angular/common";
import { Router } from '@angular/router';
import {PokemonService} from "../../service/pokemon.service";
import {Pokemon} from "../../service/pokemon";
import {PokemonDetailComponent} from "../pokemon-detail/pokemon-detail.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './componants.pokemons.html',
  styleUrl: './header.component.scss'
})

export class ComponantsPokemon implements OnInit {

  pokemons: Pokemon[] = [];

  thePokemon : Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }
}
