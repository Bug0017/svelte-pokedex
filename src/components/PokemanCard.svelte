<script lang="ts">
    import type { IPokeman } from "src/types";
    import { tw } from "twind";
    export let pokeman: IPokeman;
</script>   
<a 
    class={tw`flex flex-col items-center p-6 bg-gray-100 text-gray-800 rounded-md shadow-sm hover:shadow-md mt-10`} 
    href={`/pokemon/${pokeman.id}`}
>
    <h3 class={tw`capitalize`}>{pokeman.name}</h3>
    <img src={pokeman.image} alt="{pokeman.name}">
</a>