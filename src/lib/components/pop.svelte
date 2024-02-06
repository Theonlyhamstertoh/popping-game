<script lang="ts">
	import { cn } from '$lib/utils';

	let clicked = false;
	export let audio: HTMLAudioElement;

	const playAudio = () => {
		audio.currentTime = 0.96;
		clicked = true;
		audio.play();
	};
</script>

<button
	class={cn(
		'size-12 rounded-lg text-gray-900 bg-gray-900  cursor-pointer',
		clicked && 'bg-transparent border border-gray-400'
	)}
	on:click={playAudio}
>
	Pop
</button>
