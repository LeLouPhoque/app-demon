import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private apiUrl = 'https://pokebuildapi.fr/api/v1/pokemon/limit/100';

  private apiUrlPokemon = 'https://pokebuildapi.fr/api/v1/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getPokemon(id: number | undefined): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrlPokemon}${id}`);
  }
}
