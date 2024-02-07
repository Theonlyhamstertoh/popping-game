<script lang="ts">
	import { cn } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import LucidePartyPopper from '~icons/lucide/party-popper';

	let clicked = false;
	let counter = 5000;
	let timeoutId: number;
	export let audio: HTMLAudioElement;

	const playAudio = () => {
		if (clicked) return;
		audio.currentTime = 0.96;
		clicked = true;
		audio.play();
		const countdown = () => {
			counter -= 1;
			if (counter === 0) {
				clicked = false;
				counter = 100;
			} else {
				timeoutId = setTimeout(countdown, 1);
			}
		};

		timeoutId = setTimeout(countdown, 1);
	};
</script>

<div in:fade class={cn(' bg-gray-950 rounded-lg border', clicked && 'bg-white')}>
	<button
		class={cn(
			'size-12 font-bold transition relative  text-gray-50 cursor-pointer',
			clicked
				? 'bg-small-light-dotted-blur text-gray-700 '
				: 'active:scale-[175%] hover:scale-105 text-gray-50 bg-small-dotted-blur'
		)}
		on:click={playAudio}
	>
		{clicked ? counter : 'Pop'}
	</button>
</div>
