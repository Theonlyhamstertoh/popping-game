<script lang="ts">
	import { Check, Prompter } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { derived, writable } from 'svelte/store';

	import LucidePlus from '~icons/lucide/plus';
	import LucideClipboard from '~icons/lucide/clipboard';

	import LucideChevronsUpDown from '~icons/lucide/chevrons-up-down';
	import LucideLoader2 from '~icons/lucide/loader-2';
	import { fade } from 'svelte/transition';

	import { Progress } from '$lib/components/ui/progress';
	import CoverLetter from '$lib/components/cover-letter.svelte';
	import { toast } from 'svelte-sonner';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { cn, countWords } from '$lib/utils';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import * as Carousel from '$lib/components/ui/carousel';

	const jobDescriptionPlaceholder = `Job Description:

Responsibilities:

- Lead UI/UX ideation and design for web and mobile applications, ensuring seamless navigation and aesthetic appeal.
- Conduct comprehensive user research to understand preferences and pain points.
- Develop wireframes, prototypes, and mockups to iterate design concepts.
- Stay updated on industry trends to drive innovation and maintain a competitive edge.

Qualifications:

- Bachelor's or Master's degree in Design or related field.
- Proven experience in UI/UX roles with an innovative portfolio.
- Proficiency in tools like Sketch, Adobe XD, or Figma.
- Strong grasp of user-centered design principles.
	`;
	const resumePlaceholder = `[Name] | [Email] | [Contact]

Work Experience:
UI/UX Designer
[Company Name], [Dates of Employment]
- Collaborated cross-functionally to create user-centric designs
Conducted user research and usability testing
- Designed wireframes, prototypes, and mockups
- Ensured design consistency across platforms

[Company Name], [Dates of Employment]
- Supported UI/UX design efforts for digital products....

Education:
Bachelor of Science in Design
[University Name], [Year of Graduation]
`;

	const promptPlaceholder = `Provide examples of my strong work ethic and commitment to excellence, demonstrating how these qualities make me a valuable asset for the [job title] position at [company name].`;

	const coverLetterStore = writable({
		jobDescription: '',
		resume: '',
		prompt: '',
		generated: ''
	});

	let loading: boolean = false;
	const maxWordCount = 5000;
	const copyToClipboard = async () => {
		await navigator.clipboard.writeText($coverLetterStore.generated ?? '');
		toast.success('Copied to clipboard');
	};
	const generateEssay = async () => {
		loading = true;
		const response = await fetch('/api/v1/generate', {
			method: 'POST',
			body: JSON.stringify({
				jobDescription: $coverLetterStore.jobDescription,
				resume: $coverLetterStore.resume,
				prompt: $coverLetterStore.prompt
			})
		});
		$coverLetterStore.generated = (await response.json()) ?? '';
		console.log($coverLetterStore.generated);
		loading = false;
	};
</script>

<!-- <Hero /> -->

<div class="mt-16"></div>
<div
	class="flex items-center justify-center p-1 px-4 text-[0.75rem] rounded-full border border-gray-900 bg-gray-800 w-fit mx-auto text-white"
>
	<span class="flex items-center font-medium">In Beta</span>
</div>
<h1
	class="inline px-4 h-max mx-auto text-3xl lg:text-5xl lg:leading-normal max-w-lg lg:max-w-3xl font-semibold leading-normal text-center text-transparent transition-all bg-clip-text bg-gradient-to-r bg-300% animate-gradient from-gray-500 to-gray-950"
>
	Cover Letter
</h1>

<p class="text-center px-4 text-pretty max-w-xl mx-auto text-gray-700">
	Speed up your job hunt with Meowrite AI and craft your personalized cover letters in just seconds
</p>

<div class="max-w-2xl px-4 mx-auto w-full my-4 space-y-3">
	<Collapsible.Root class="space-y-2">
		<Collapsible.Trigger
			class="flex gap-2 items-center border w-full bg-white border-gray-200 shadow-sm px-6 py-3 [&[data-state=open]]:bg-gray-50"
		>
			<Check checked={$coverLetterStore.jobDescription.length > 0} />

			<h3 class=" w-full font-mono text-sm text-gray-700 text-start">1. Add Job Description</h3>
			<LucideChevronsUpDown class="size-4" />
		</Collapsible.Trigger>

		<Collapsible.Content>
			<div
				class=" bg-white space-y-2 border px-4 py-3 text-sm h-fit grid grid-rows-[1fr_auto_auto]"
			>
				<textarea
					bind:value={$coverLetterStore.jobDescription}
					placeholder={jobDescriptionPlaceholder}
					maxlength={5000}
					class=" w-full resize-none font-mono h-96 rounded-3xl border-none p-3 text-stone-900 outline-none placeholder:text-gray-400/80"
				/>
				<span class={cn('text-xs text-end text-gray-500 font-mono')}>
					{$coverLetterStore.jobDescription.length}/{maxWordCount} characters
				</span>
			</div>
		</Collapsible.Content>
	</Collapsible.Root>
	<Collapsible.Root class="space-y-2">
		<Collapsible.Trigger
			class="flex gap-2 items-center border w-full bg-white border-gray-200 shadow-sm px-6 py-3 [&[data-state=open]]:bg-gray-50"
		>
			<Check checked={$coverLetterStore.resume.length > 0} />

			<h3 class=" w-full font-mono text-sm text-gray-700 text-start">2. Add Your Resume</h3>
			<LucideChevronsUpDown class="size-4" />
		</Collapsible.Trigger>

		<Collapsible.Content>
			<div
				class=" bg-white space-y-2 border px-4 py-3 font-mono text-sm h-fit grid grid-rows-[1fr_auto_auto]"
			>
				<textarea
					bind:value={$coverLetterStore.resume}
					placeholder={resumePlaceholder}
					class=" w-full h-96 resize-none rounded-none border-none p-3 text-gray-900 outline-none placeholder:text-gray-400/80"
				/>
				<span class={cn('text-xs text-end text-gray-500 font-mono')}>
					{$coverLetterStore.resume.length}/{maxWordCount} characters
				</span>
			</div>
		</Collapsible.Content>
	</Collapsible.Root>
	<Collapsible.Root class="space-y-2">
		<Collapsible.Trigger
			class="flex gap-2 items-center border w-full bg-white border-gray-200 shadow-sm px-6 py-3 [&[data-state=open]]:bg-gray-50"
		>
			<Check checked={$coverLetterStore.prompt.length > 0} />

			<h3 class=" w-full font-mono text-sm text-gray-700 text-start">3. Your Prompt (Optional)</h3>
			<LucideChevronsUpDown class="size-4" />
		</Collapsible.Trigger>

		<Collapsible.Content>
			<div
				class=" bg-white space-y-2 border px-4 py-3 font-mono text-sm h-fit grid grid-rows-[1fr_auto_auto]"
			>
				<textarea
					bind:value={$coverLetterStore.prompt}
					placeholder={promptPlaceholder}
					class=" w-full h-96 resize-none rounded-none border-none p-3 text-gray-900 outline-none placeholder:text-gray-400/80"
				/>
				<span class={cn('text-xs text-end text-gray-500 font-mono')}>
					{$coverLetterStore.prompt.length}/{maxWordCount} characters
				</span>
			</div>
		</Collapsible.Content>
	</Collapsible.Root>

	<Button
		variant="default"
		size="lg"
		on:click={generateEssay}
		disabled={$coverLetterStore.jobDescription.length === 0 ||
			$coverLetterStore.resume.length === 0 ||
			loading}
		class="w-full font-mono"
	>
		{#if loading === true}
			<LucideLoader2 class="size-4 mr-2 animate-spin" /> Creating Cover Letter...
		{:else}
			<LucidePlus class="size-4 mr-2" />
			Generate Essay
		{/if}
	</Button>
</div>

<div
	class="bg-grid bg-white min-h-96 relative py-8 flex flex-col justify-center items-center space-y-3"
>
	{#if $coverLetterStore.generated}
		<div class="p-2 bg-white w-full max-w-3xl border">
			<Button on:click={copyToClipboard} variant="secondary" size="icon" class="">
				<LucideClipboard class="text-gray-600 size-5" />
			</Button>
		</div>
	{/if}
	<div class="max-w-3xl mx-auto bg-white space-y-2 border px-4 py-3 font-mono text-sm">
		{#if $coverLetterStore.generated}
			<span
				contenteditable="plaintext-only"
				class="resize-none rounded-none border-none text-gray-900 outline-none empty:before:content-['Your_Cover_Letter_Will_Appear_Here']"
				bind:innerText={$coverLetterStore.generated}
			/>
		{:else if loading}
			<span
				class="w-fit resize-none h-6 items-center flex gap-2 rounded-none border-none text-gray-900 outline-none"
				><LucideLoader2 class="size-4 animate-spin" /> In Progress...</span
			>
		{:else}
			<span class="w-fit resize-none h-6 rounded-none border-none p-3 text-gray-900 outline-none"
				>Your Cover Letter Will Appear Here</span
			>
		{/if}
	</div>
</div>
