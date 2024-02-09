<script lang="ts">
	import { Pop } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import { game } from '$lib/stores/game.store';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let audio: HTMLAudioElement;
	onMount(() => {
		audio = new Audio('pop.m4a');
	});

	$: console.log($game.buttons);

	const totalButtons = 9;
	// Add numbers to the ones you clicked. so you have an order
	// after clicking through all of them, regenerate them
	// Make it game loopable
	// Generate them in random spots
	// Create a leaderboard with a name to attempt
</script>

<div class=" h-screen">
	<div class="grid grid-cols-5 w-fit mt-8 h-fit gap-2 mx-auto justify-center items-center">
		{#each $game.buttons as pop}
			<Pop {audio} {...pop} />
		{/each}
	</div>
</div>

<!--  -->
