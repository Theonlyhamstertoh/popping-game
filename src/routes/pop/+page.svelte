<script lang="ts">
	import { Pop } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';

	let audio: HTMLAudioElement;
	onMount(() => {
		audio = new Audio('pop.m4a');
	});
</script>

<div class="grid grid-cols-6 w-fit mt-8 h-fit gap-2 mx-auto justify-center items-center">
	{#each [...new Array(30)] as _}
		<Pop {audio} />
	{/each}
</div>

<!--  -->
