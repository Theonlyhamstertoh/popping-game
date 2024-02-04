<script lang="ts">
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import LucideArrowRight from '~icons/lucide/arrow-right';
	import { Badge } from './ui/badge';
	import CardDescription from './ui/card/card-description.svelte';
	export let title: string;
	export let description: string;
	export let href: string = '#';
	export let comingSoon: boolean = false;
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<Card
	class={cn(
		'group rounded-none  hover:shadow-md hover:border-gray-500 border-double  transition-colors cursor-pointer flex-col relative shadow-none ',
		comingSoon && 'hover:border-border hover:shadow-none opacity-50',
		className
	)}
>
	<a {href} class:cursor-default={comingSoon}>
		<div
			class="group-hover:animate-gradient group-hover:scale-110 transition duration-150 bg-grid-blur w-full h-full"
		></div>
		<CardHeader>
			<CardTitle class="flex h-10 justify-between  gap-2 items-center font-medium"
				>{title}

				{#if comingSoon}
					<Badge class="top-0 right-0 absolute font-normal  py-2 rounded-none" variant="secondary"
						>Coming Soon</Badge
					>
				{:else}
					<Button
						size="icon"
						variant="ghost"
						class="group-hover:bg-accent group-hover:-translate-x-1 transition"
					>
						<LucideArrowRight class="size-5" />
					</Button>
				{/if}
			</CardTitle>
		</CardHeader>
		<CardContent class="grow ">
			<p class="text-sm">{description}</p>
		</CardContent>
	</a>
</Card>
