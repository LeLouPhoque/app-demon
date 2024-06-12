import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { GenerationsComponent } from './componants/generations/componants.generations';
import { ComponantsPokemon } from './componants/pokemons/componants.pokemon';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'generations', component: GenerationsComponent},
    {path: 'pokemons', component: ComponantsPokemon},
];
