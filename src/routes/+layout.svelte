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
	import GoogleAnalytics from '$lib/components/google-analytics.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<!-- <nav class="">
	<h1 class="text-xl bg- font-medium text-gray-900 text-center py-6">Meowrite</h1>
</nav> -->

<svelte:head>
	<title>Meowrite | Home</title>
</svelte:head>

<Toaster closeButton />

<GoogleAnalytics />
<nav class="py-2 shadow-sm bg-white relative flex items-center justify-center">
	<Button href="/" variant="ghost" class="text-sm gap-2  text-gray-700 font-mono font-normal">
		<img src="/favicon.png" class="size-10" alt="Meowrite Logo" />
		<h2 class="font-medium text-xl">Meowrite</h2>
	</Button>
</nav>
<main class="relative flex flex-col w-screen min-h-screen py-0 m-0">
	<div class="bg-dotted-blur -z-20"></div>

	<slot />
</main>
