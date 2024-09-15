<div id="chords">
    <Chord {chord}></Chord>
    <button on:click={() => chord = randomChord()}>Generate Chord!</button>
</div>


<script lang="ts">
    import { randomChord } from "$lib";
	import Chord from "$lib/Chord.svelte";
    let chord = randomChord()

</script>
