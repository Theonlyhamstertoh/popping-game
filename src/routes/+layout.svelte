<script>
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/500.css';
	import '@fontsource/poppins/600.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import '@fontsource/poppins/900.css';

	import '@fontsource/ibm-plex-mono/300.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';
	import '@fontsource/ibm-plex-mono/600.css';

	// Supports weights 300-700
	import '@fontsource-variable/space-grotesk';
	import '../app.pcss';

	import { Toaster } from '$lib/components/ui/sonner';
	import { Button } from '$lib/components/ui/button';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import LucideAward from '~icons/lucide/award';
	import LucideTreePine from '~icons/lucide/tree-pine';
	import LucideTimer from '~icons/lucide/timer';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<!-- <nav class="">
	<h1 class="text-xl bg- font-medium text-gray-900 text-center py-6">Meowrite</h1>
</nav> -->

<svelte:head>
	<title>Meowpop | Home</title>
</svelte:head>

<Toaster closeButton />

<nav class="py-2 shadow-sm bg-white relative flex items-center justify-center">
	<!-- <Button href="/" variant="ghost" class="text-sm gap-2  text-gray-700 font-mono font-normal">
		<img src="/favicon.png" class="size-10" alt="Meowrite Logo" />
		<h2 class="font-medium text-xl">Meowrite</h2>
	</Button> -->

	<Button
		variant="outline"
		class="flex gap-2 items-center border w-fit  shadow-sm px-6 py-3 font-bold"
	>
		<LucideAward class="size-5" />
		<h3 class=" w-full font-mono text-sm text-gray-700 text-start">Leaderboard</h3>
	</Button>
	<Button
		variant="outline"
		class="flex gap-2 items-center border w-fit  shadow-sm px-6 py-3 font-bold"
	>
		<LucideTimer class="size-5" />
		<h3 class=" w-full font-mono text-sm text-gray-700 text-start">Timed</h3>
	</Button>
	<Button
		variant="outline"
		class="flex gap-2 items-center border w-fit  shadow-sm px-6 py-3 font-bold"
	>
		<LucideTreePine class="size-5" />
		<h3 class=" w-full font-mono text-sm text-gray-700 text-start">Zen</h3>
	</Button>
</nav>
<main class="relative flex flex-col w-screen min-h-screen py-0 m-0">
	<div class="bg-dotted-blur -z-20"></div>

	<slot />
</main>
