<script lang="ts">
	import { Pop } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let audio: HTMLAudioElement;
	onMount(() => {
		audio = new Audio('pop.m4a');
	});

	const totalButtons = 120;
	// Add numbers to the ones you clicked. so you have an order
	// after clicking through all of them, regenerate them
	// Make it game loopable
	// Generate them in random spots
	// Create a leaderboard with a name to attempt
</script>

<div class=" h-screen">
	<div class="grid grid-cols-12 w-fit mt-8 h-fit gap-2 mx-auto justify-center items-center">
		{#each [...new Array(totalButtons)] as _}
			<Pop {audio} />
		{/each}
	</div>
</div>

<!--  -->
