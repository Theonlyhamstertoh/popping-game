<script lang="ts">
	import { cn } from '$lib/utils';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectTrigger,
		SelectItem,
		SelectValue,
		SelectLabel
	} from '$lib/components/ui/select';

	import { Textarea } from '$lib/components/ui/textarea';

	import LucideUpload from '~icons/lucide/upload';
	import LucideSendHorizontal from '~icons/lucide/send-horizontal';
	import LucidePlus from '~icons/lucide/plus';
	import { Card, CardContent } from './ui/card';
	import FileBadge from './file-badge.svelte';
	import PromptStore from '$lib/stores/prompt.store';
	import { onDestroy } from 'svelte';

	type FileProps = {
		id: string;
		file: File;
	};

	let prompt = '';
	const unsubscribe = PromptStore.subscribe((data) => {
		console.log(data);
		prompt = data;
	});
	onDestroy(unsubscribe);
	let files: FileProps[] = [];
	let selectedWordCount = { value: '750', label: '750 Words' };
	let selectedFormat = { value: 'essay', label: 'Essay' };
	let dialogOpen = false;

	const addFile = (e: Event) => {
		const target = e.target as HTMLInputElement;

		if (target.files && target.files.length) {
			for (const file of target.files) {
				files.push({ id: crypto.randomUUID(), file });
				files = files;
			}
		}
	};

	const addTextFile = (e: Event) => {
		const target = e.target as HTMLFormElement;
		const form = new FormData(target);
		const textDocumentName = form.get('textDocumentName') ?? '';
		const textDocumentContent = form.get('textDocumentContent') ?? '';
		const blob = new Blob([textDocumentContent], { type: 'text/plain' });
		const file = new File([blob], `${textDocumentName}.txt`, { type: 'text/plain' });
		files.push({ id: crypto.randomUUID(), file });
		files = files;
		dialogOpen = false;
	};

	const removeFile = (id: string) => {
		files = files.filter((file) => file.id !== id);
	};

	const handlePromptInput = (e: Event) => {
		PromptStore.set((e.target as HTMLSpanElement).textContent ?? '');
	};

	$: console.log(files);
</script>

<Card class="mx-auto w-full max-w-4xl border-2 border-amber-100 shadow-xl shadow-amber-100/70">
	<CardContent class="grid grid-rows-[1fr_auto_auto]  gap-4 p-4 pb-2">
		<span
			class="min-h-32 w-full resize-none rounded-3xl border-none p-3 text-stone-900 caret-amber-600 outline-none selection:bg-amber-200 empty:text-stone-400 empty:before:content-['Paste_your_prompt_here...']"
			contenteditable="plaintext-only"
			on:input={handlePromptInput}
		/>

		<!-- Uploaded Files -->
		<div
			class="no-scrollbar flex h-16 items-end gap-4 overflow-y-visible overflow-x-scroll empty:h-0"
		>
			{#each files ?? [] as { file, id }}
				<FileBadge {...file} {id} {removeFile} />
			{/each}
		</div>

		<div
			class=" flex w-full flex-col items-start justify-between gap-2 overflow-hidden p-1 pt-0.5 md:flex-row"
		>
			<div
				class="no-scrollbar flex h-12 w-full items-center gap-2 overflow-x-auto md:overflow-visible"
			>
				<Label
					class={cn(
						buttonVariants({ variant: 'secondary', size: 'icon' }),
						'shrink-0 cursor-pointer'
					)}
				>
					<input type="file" multiple id="upload" accept=".pdf,.txt" on:change={addFile} hidden />
					<LucideUpload class="size-5" />
				</Label>

				<!-- Add Additional Text Dialog -->
				<Dialog bind:open={dialogOpen}>
					<DialogTrigger
						on:click={() => (dialogOpen = true)}
						class={buttonVariants({ variant: 'secondary' })}
					>
						<LucidePlus class="mr-2 size-5" />Add Text
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Add Text Document</DialogTitle>
							<DialogDescription>
								Paste in your essay outline, notes, and research here
							</DialogDescription>
						</DialogHeader>
						<form on:submit|preventDefault={addTextFile} class="space-y-4">
							<Input name="textDocumentName" required type="text" placeholder="Document Name" />
							<Textarea
								required
								minlength={10}
								name="textDocumentContent"
								class="w-full resize-none text-stone-900 outline-none "
								rows={18}
								placeholder="Paste your text content here"
							/>
							<Button type="submit"><LucidePlus class="mr-2 size-5" /> Add Document</Button>
						</form>
					</DialogContent>
				</Dialog>

				<!-- Essay Format -->
				<Select loop selected={selectedFormat}>
					<SelectTrigger class="w-[180px] flex-none">
						<SelectValue placeholder="Format" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Writing Format</SelectLabel>
							<SelectItem value="Statement">Statement</SelectItem>
							<SelectItem value="essay">Essay</SelectItem>
							<SelectItem value="mla">MLA</SelectItem>
							<SelectItem value="ala">ALA</SelectItem>
							<SelectItem value="letter">Letter</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>

				<!-- Max Word Count -->
				<Select selected={selectedWordCount}>
					<SelectTrigger class="w-[180px] flex-none">
						<SelectValue placeholder="Word Count" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Max Words</SelectLabel>
							<SelectItem value="150">150 Words</SelectItem>
							<SelectItem value="250">250 Words</SelectItem>
							<SelectItem value="500">500 Words</SelectItem>
							<SelectItem value="750">750 Words</SelectItem>
							<SelectItem value="1000">1000 Words</SelectItem>
							<SelectItem value="2000">2000 Words</SelectItem>
							<SelectItem value="4000">4000 Words</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			<!-- Submit Button -->
			<Button variant="default" class="my-1 ml-auto w-full grow font-medium lg:w-min">
				Start Writing
				<LucideSendHorizontal class="ml-2 size-5" />
			</Button>
		</div>
	</CardContent>
</Card>
