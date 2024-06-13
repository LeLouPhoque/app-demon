import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GenerationsComponent } from './componants/generations/componants.generations';
import { ComponantsPokemon } from './componants/pokemons/componants.pokemon';
import {PokemonDetailComponent} from "./componants/pokemon-detail/pokemon-detail.component";

export const routes: Routes = [
    {path: 'generations', component: GenerationsComponent},
    {path: 'pokemons', component: ComponantsPokemon},
    {path: 'pokemon-detail/:id', component: PokemonDetailComponent},
];
