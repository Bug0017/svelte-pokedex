import type { IPokeman } from './../types/index';
import {writable} from 'svelte/store'
import { URL } from '../constants';
export const pokemon = writable<IPokeman[]>([]);
// set a pokemon to pokestore...
(async (url:string) => {
     const res = await fetch(url);
     const data = await res.json();
     const loadedPokemon = (data: any[]) => {
        return data.map((item, i)=>{
            return {
                        ...item,
                        id: i + 1,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
					};
        });
     }
     pokemon.set(loadedPokemon(data.results))
})(URL)

