<script lang="ts">
	import type { Chord } from './index';
	import { semitonesFromCToNote } from './index';
	export let chord: Chord = { root: 0, quality: 'm' };
</script>

<div>
	{semitonesFromCToNote(chord.root, !Math.floor(Math.random()))}
	{chord.quality}
	{#if chord.extension}
		{chord.extension}
	{/if}
	{#if chord.inversion}
		/ {semitonesFromCToNote(
			(((chord.inversion - chord.root) % 12) + 12) % 12,
			!Math.floor(Math.random())
		)}
	{/if} <br />
	{#each Object.entries(chord) as [i, a]}
		{i}:{a} <br />
	{/each}
</div>

<style>
	div {
	}
</style>
