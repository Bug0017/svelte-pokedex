<script context="module" lang="ts">
    export async function load(ctx){
        const {id} = ctx.page.params;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url)
        const pokeman = await res.json()
        return {
            props:{pokeman}
        }
    }
</script>

<script lang="ts">
    export let pokeman: any;
    import { tw } from "twind";
</script>

<section>
    <div class={tw`flex flex-col items-center`}>
        <h1>{pokeman.name}</h1>
    </div>
</section>