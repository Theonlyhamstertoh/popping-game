<script>
	import { Button } from '$lib/components/ui/button';
	import LucideArrowLeft from '~icons/lucide/arrow-left';
</script>

<nav class="py-2 shadow-sm bg-white relative flex items-center justify-center">
	<Button href="/" variant="ghost" class="text-sm gap-2  text-gray-700 font-mono font-normal">
		<img src="/favicon.png" class="size-10" alt="Meowrite Logo" />
		<h2 class="font-medium text-xl">Meowrite</h2>
	</Button>
</nav>
<slot />
