<script lang="ts">
	import { onMount } from 'svelte';
	import TypeWriter from 'svelte-typewriter';
	import LucideStar from '~icons/lucide/star';

	import { fade } from 'svelte/transition';
	import CatLottie from './cat-lottie.svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="flex flex-col items-center justify-center py-16">
	<CatLottie class="size-40 animate-bounce" />
	<div
		class="flex items-center justify-center p-1 px-4 text-[0.75rem] rounded-full border border-gray-900 bg-gray-800 w-fit text-white"
	>
		<span class="flex items-center font-medium">
			<LucideStar class="inline mr-1.5 text-white size-4" />New │
		</span>
		<span>Added Cover Letters</span>
	</div>

	<h1
		in:fade={{ duration: 1000 }}
		class="inline px-4 h-max mx-auto text-3xl pt-3 lg:text-5xl lg:leading-normal max-w-lg lg:max-w-3xl font-semibold leading-normal text-center text-transparent transition-all bg-clip-text bg-gradient-to-r bg-300% animate-gradient from-gray-500 to-gray-950"
	>
		Supercharge your writing with AI for your{' '}

		{#if !mounted}
			<span in:fade={{ duration: 1000 }} class="italic font-bold border-b-8 border-b-indigo-300"
				>grant proposal</span
			>
		{/if}

		<TypeWriter mode="loopRandom" wordInterval={3000} interval={70} element="span">
			<span class=" p-0 m-0 mx-auto italic font-bold">
				<span class="border-b-8 border-b-green-300"> cover letter</span>
				<span class="border-b-8 border-b-emerald-300"> scholarships</span>
				<span class="border-b-8 border-b-fuchsia-300"> college admission</span>
				<span class="border-b-8 border-b-cyan-300"> research paper</span>
				<span class="border-b-8 border-b-blue-300"> news article</span>
				<span class="border-b-8 border-b-rose-300"> blog</span>
				<span class="border-b-8 border-b-yellow-300"> email</span>
			</span>
		</TypeWriter>
	</h1>
</div>

<style>
	:root {
		--cursor-width: 16px;
		--cursor-color: rgb(170, 170, 170);
	}
</style>
