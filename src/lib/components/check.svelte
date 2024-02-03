<script lang="ts">
	import LucideSquare from '~icons/lucide/square';
	import LucideCheckSquare from '~icons/lucide/check-square';
	import { fade } from 'svelte/transition';

	export let checked: boolean = false;
</script>

{#if checked}
	<span in:fade>
		<LucideCheckSquare class="size-4 mr-2 text-green-600" />
	</span>
{:else}
	<span in:fade>
		<LucideSquare class="size-4 mr-2 text-gray-600" />
	</span>
{/if}
