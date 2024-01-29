<script lang="ts">
	import { cn, formatBytes } from '$lib/utils';
	import LucideX from '~icons/lucide/x';
	import TablerFileTypeTxt from '~icons/tabler/file-type-txt';
	import TablerFileTypePdf from '~icons/tabler/file-type-pdf';
	export let name: string = '';
	export let id: string;
	export let size: number = 0;
	export let type: string = 'application/pdf';
	export let lastModified: number;
	export let removeFile: (id: string) => void;
</script>

<div class="relative">
	<button
		class="absolute right-0 top-0 z-10 -translate-y-3 translate-x-2 cursor-pointer rounded-full border bg-white p-1"
		on:click={() => removeFile(id)}><LucideX class="size-4" /></button
	>
	<button
		class="border-0.5 flex flex-1 items-stretch rounded-lg border-primary bg-secondary text-left transition-all"
		aria-label="Preview contents"
		><div
			class:bg-blue-300={type === 'text/plain'}
			class={cn(
				'flex w-11 items-center justify-center rounded-l-[inherit] text-primary',
				type === 'text/plain' ? 'bg-blue-300' : 'bg-orange-300'
			)}
		>
			{#if type === 'application/pdf'}
				<TablerFileTypePdf class="size-6" />
			{:else if type === 'text/plain'}
				<TablerFileTypeTxt class="size-6" />
			{/if}
		</div>
		<div class="padding min-w-0 flex-1 py-2 pl-3 pr-2">
			<div class="line-clamp-1 w-44 text-ellipsis break-words text-sm font-medium leading-tight">
				{name}
			</div>
			<div class="text-text-400 line-clamp-1 text-xs">
				<span>{formatBytes(size)} • {new Date(lastModified).toLocaleDateString()}</span>
			</div>
		</div></button
	>
</div>
