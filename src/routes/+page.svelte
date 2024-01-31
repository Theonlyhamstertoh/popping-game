<script lang="ts">
	import { CoverLetter, FileBadge, HeroTypeWriter, Prompter } from '$lib';

	import { Card, CardContent } from '$lib/components/ui/card';

	import * as Tabs from '$lib/components/ui/tabs';
	import { Button } from '$lib/components/ui/button';
</script>

<main class="flex flex-col w-screen min-h-screen py-0 m-0">
	<HeroTypeWriter />

	<div class="w-full px-3 py-8">
		<Tabs.Root value="account" class="max-w-3xl mx-auto">
			<Tabs.List class="">
				<Tabs.Trigger value="account">Cover Letter</Tabs.Trigger>
				<Tabs.Trigger value="password">Essay</Tabs.Trigger>
				<Tabs.Trigger value="email">Email</Tabs.Trigger>
				<Tabs.Trigger value="statement">Personal Statement</Tabs.Trigger>
				<Tabs.Trigger value="summarize">Summarize</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="account"><CoverLetter /></Tabs.Content>
			<Tabs.Content value="password"><Prompter /></Tabs.Content>
		</Tabs.Root>
		<!-- <Prompter /> -->
		<p class="my-3 text-sm text-center text-amber-900">Made by students. For free.</p>
	</div>
</main>
