<script context="module" lang="ts">
    export async function load(ctx){
        const res = await fetch('http://localhost:3000/api/json')
        const data = await res.json()
        return {
            props: {
                data
            }
        }
    }
</script>
<script lang="ts">
    import {pokemon} from '../stores/pokeStore';
    import {tw} from 'twind'
    import PokemanCard from '../components/PokemanCard.svelte';
    import type { IPokeman } from 'src/types';

    let searchTerm: string;
    let filteredPokeman: IPokeman[];
    $: {
        console.log(searchTerm)
        if(searchTerm){
            filteredPokeman = $pokemon.filter((pokeman: IPokeman) => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }else{
            filteredPokeman = [...$pokemon]
        }
    }
    export let data;
</script>
<svelte:head>
    <title>
        Pokedex
    </title>
</svelte:head>
<section>
    <h1 class={tw`text-4xl text-center my-8 uppercase`}>Pokedex {data.message}</h1>
    <input type="text" bind:value={searchTerm} class={tw`w-full rounded-md text-lg p-4 border-2 border-gray-200`}>
    <div class={tw`py-4 grid grid-cols-1 md:grid-cols-4 gap-4`}>
        {#each filteredPokeman as pokeman}
         <!-- content here -->
             <PokemanCard {pokeman}/>
        {/each}
    </div>
</section>