<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';

	import LucideCheck from '~icons/lucide/check';
	import LucideMinus from '~icons/lucide/minus';
	import { cn } from '$lib/utils';

	type $$Props = CheckboxPrimitive.Props;
	type $$Events = CheckboxPrimitive.Events;

	let className: $$Props['class'] = undefined;
	export let checked: $$Props['checked'] = false;
	export { className as class };
</script>

<CheckboxPrimitive.Root
	class={cn(
		'box-content peer h-4 w-4 shrink-0 rounded-sm border border-border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
		className
	)}
	bind:checked
	{...$$restProps}
	on:click
>
	<CheckboxPrimitive.Indicator
		class={cn('flex items-center justify-center text-current h-4 w-4')}
		let:isChecked
		let:isIndeterminate
	>
		{#if isChecked}
			<LucideCheck class="h-3.5 w-3.5" />
		{:else if isIndeterminate}
			<LucideMinus class="h-3.5 w-3.5" />
		{/if}
	</CheckboxPrimitive.Indicator>
</CheckboxPrimitive.Root>
