<script lang="ts">
	import LucideClipboard from '~icons/lucide/clipboard';
	import LucideRefreshCcw from '~icons/lucide/refresh-ccw';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import PromptStore from '$lib/stores/prompt.store';
	import { onMount } from 'svelte';
	import Prompter from '$lib/components/prompter.svelte';
	import { fakeEssay } from '$lib/const';

	let essay: null | string = fakeEssay;
	let prompt = '';
	PromptStore.subscribe((data) => [(prompt = data)]);
	// onMount(async () => {
	// 	const response = await fetch('/api/v1/generate', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			prompt: prompt
	// 		})
	// 	});
	// 	essay = (await response.json()) ?? '';
	// });

	let selection: null | Selection = null;
	const handleSelectionChange = (e: Event) => (selection = document.getSelection());

	const copyToClipboard = async () => await navigator.clipboard.writeText(essay ?? '');
</script>

<svelte:document on:selectionchange={handleSelectionChange} />

<main class="flex flex-col items-center justify-center w-screen min-h-screen pt-12 bg-amber-50">
	{#if essay !== null}
		<Card class="w-full max-w-4xl mx-auto border-2 shadow-xl border-amber-100 shadow-amber-100/70">
			<CardContent class="grid grid-rows-[1fr_auto_auto]  gap-4 p-4 pb-2">
				<span
					class="min-h-32 w-full resize-none rounded-3xl border-none p-3 text-stone-900 caret-amber-600 outline-none selection:bg-amber-200 empty:text-stone-400 empty:before:content-['Paste_your_prompt_here...']"
					contenteditable="plaintext-only"
					bind:textContent={essay}
				/>
				<div class="flex w-full gap-4">
					<!-- Submit Button -->
					<Button on:click={copyToClipboard} variant="secondary" size="icon" class="">
						<LucideClipboard class=" size-5" />
					</Button>
					<Button on:click={copyToClipboard} variant="secondary" size="icon" class="">
						<LucideRefreshCcw class=" size-5" />
					</Button>
				</div>
			</CardContent>
		</Card>
	{/if}

	<!-- <p>Selected: {selection}</p> -->
</main>
