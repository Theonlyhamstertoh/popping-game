<script lang="ts">
	import { FileBadge, HeroTypeWriter, Prompter } from '$lib';

	import { Card, CardContent } from '$lib/components/ui/card';

	import LucideSparkles from '~icons/lucide/sparkles';
	import { Button } from '$lib/components/ui/button';
</script>

<main class="flex min-h-screen w-screen flex-col items-center justify-center bg-amber-50 pt-12">
	<div
		class="flex items-center justify-center rounded-full bg-stone-700 p-2 px-4 text-xs text-amber-50 md:text-sm"
	>
		<LucideSparkles class="mr-2 inline size-5 text-amber-200" />
		New! Upload your PDFs & text!
	</div>
	<HeroTypeWriter />
	<div class="w-full px-3 py-8">
		<Prompter />
		<p class="my-3 text-center text-sm text-amber-900">Made by students. For free.</p>
	</div>
</main>
