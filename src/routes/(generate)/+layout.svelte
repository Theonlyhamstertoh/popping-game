<script>
	import { Button } from '$lib/components/ui/button';
	import LucideArrowLeft from '~icons/lucide/arrow-left';
</script>

<nav>
	<Button href="/" variant="outline" class="text-sm shadow-sm text-gray-700 font-mono font-normal">
		<LucideArrowLeft class="size-4 mr-2" /> Home
	</Button>
</nav>
<slot />
