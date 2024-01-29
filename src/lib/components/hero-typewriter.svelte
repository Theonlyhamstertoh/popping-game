<script lang="ts">
	import { onMount } from 'svelte';
	import TypeWriter from 'svelte-typewriter';
	import { fade } from 'svelte/transition';

	let mounted = false;

	onMount(() => {
		mounted = true;
		console.log(mounted);
	});
</script>

<h1
	in:fade={{ duration: 1000 }}
	class="mx-auto inline-block max-w-3xl text-balance p-2 text-center text-3xl font-semibold leading-normal text-stone-950 transition-all md:text-5xl md:leading-normal lg:max-w-4xl lg:text-6xl lg:leading-relaxed"
>
	Generate the perfect essay for your

	{#if !mounted}
		<p
			in:fade={{ duration: 1000 }}
			class="inline w-fit break-words rounded-3xl bg-violet-300 px-2 py-1 leading-normal text-white md:inline-block md:leading-normal lg:leading-relaxed"
		>
			history class
		</p>
	{/if}
	<TypeWriter mode="loopRandom" wordInterval={3000} interval={70} element="span">
		<div
			in:fade={{ duration: 1000 }}
			class="mx-auto w-fit break-words font-semibold leading-normal text-white md:inline-block md:leading-normal lg:leading-relaxed"
		>
			<span class="rounded-3xl bg-green-300 px-2 py-1"> cover letter </span>
			<span class="rounded-3xl bg-emerald-300 px-2 py-1"> scholarships </span>
			<span class="rounded-3xl bg-fuchsia-300 px-2 py-1"> college admission </span>
			<span class="rounded-3xl bg-cyan-300 px-2 py-1"> research paper </span>
			<span class="rounded-3xl bg-blue-300 px-2 py-1"> news article </span>
			<span class="rounded-3xl bg-rose-300 px-2 py-1">blog</span>
			<span class="rounded-3xl bg-yellow-300 px-2 py-1"> instagram caption </span>
		</div>
	</TypeWriter>
</h1>

<style>
	:root {
		--cursor-width: 16px;
		--cursor-color: white;
	}
</style>
