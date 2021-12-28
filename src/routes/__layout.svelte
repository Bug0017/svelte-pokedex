<script lang="ts">
    import { tw } from "twind";
    import Nav from "../components/Nav.svelte";
</script>
<section class={tw`p-20`}>
    <Nav/>
    <slot/>
</section>