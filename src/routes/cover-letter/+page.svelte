<script>
	import { Prompter } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import * as Collapsible from '$lib/components/ui/collapsible';

	import LucidePlus from '~icons/lucide/plus';
	import LucideChevronsUpDown from '~icons/lucide/chevrons-up-down';
	import LucideSquare from '~icons/lucide/square';
	import LucideCheckSquare from '~icons/lucide/check-square';

	import { Progress } from '$lib/components/ui/progress';
	import CoverLetter from '$lib/components/cover-letter.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';

	const jobDescriptionPlaceholder = `Job Description:
	
Join us as a UI/UX Designer at CompanyABC, where creativity meets functionality. Collaborate with diverse teams to craft intuitive interfaces and captivating experiences for our global audience.

Responsibilities:

- Lead UI/UX ideation and design for web and mobile applications, ensuring seamless navigation and aesthetic appeal.
- Conduct comprehensive user research to understand preferences and pain points.
- Develop wireframes, prototypes, and mockups to iterate design concepts.
- Stay updated on industry trends to drive innovation and maintain a competitive edge.
- Advocate for a user-centered design approach throughout the product lifecycle.

Qualifications:

- Bachelor's or Master's degree in Design or related field.
- Proven experience in UI/UX roles with an innovative portfolio.
- Proficiency in tools like Sketch, Adobe XD, or Figma.
- Strong grasp of user-centered design principles.
- Excellent communication skills and passion for creative problem-solving.
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
[University Name], [Year of Graduation]`;
</script>

<!-- <Hero /> -->

<div class="mt-16"></div>
<div
	class="flex items-center justify-center p-1 px-4 text-[0.75rem] rounded-full border border-gray-900 bg-gray-800 w-fit mx-auto text-white"
>
	<span class="flex items-center font-medium"> Meowrite AI</span>
</div>
<h1
	class="inline px-4 h-max mx-auto text-3xl lg:text-5xl lg:leading-normal max-w-lg lg:max-w-3xl font-semibold leading-normal text-center text-transparent transition-all bg-clip-text bg-gradient-to-r bg-300% animate-gradient from-gray-500 to-gray-950"
>
	Cover Letter
</h1>

<p class="text-center px-4 text-pretty max-w-xl mx-auto text-gray-700">
	Revolutionize your job hunt with Meowrite cover letter generator, crafting your personalized
	letters in just seconds
</p>

<div class="max-w-2xl px-4 mx-auto w-full my-4 space-y-3">
	<Collapsible.Root class="space-y-2" open>
		<Collapsible.Trigger
			class="flex gap-2 items-center border w-full bg-white border-gray-200 shadow-sm px-6 py-3 [&[data-state=open]]:bg-gray-50"
		>
			<LucideSquare class="size-4 mr-2 text-gray-600" />
			<h3 class=" w-full font-mono text-sm text-gray-700 text-start">1. Add Job Description</h3>
			<!-- <Button variant="ghost" size="sm" class="w-9 p-0  hover:bg-transparent shrink-0"> -->
			<LucideChevronsUpDown class="size-4" />
			<!-- <span class="sr-only">Toggle</span> -->
			<!-- </Button> -->

			<!-- <h4 class="text-sm font-semibold">@huntabyte starred 3 repositories</h4> -->
		</Collapsible.Trigger>

		<Collapsible.Content>
			<div
				class=" bg-white space-y-2 border px-4 py-3 text-sm h-fit grid grid-rows-[1fr_auto_auto]"
			>
				<span
					id="jobDescription"
					placeholder={jobDescriptionPlaceholder}
					class=" w-full resize-none font-mono rounded-3xl border-none p-3 text-stone-900 outline-none empty:text-gray-400/80"
					contenteditable="plaintext-only"
				/>
				<span class="text-end">
					<span class="text-xs text-gray-500 font-mono"> 0/1000 Words </span>
					<!-- <Button
						href="/generate"
						variant="secondary"
						size="sm"
						class="font-mono font-medium w-fit "
					>
						Next
					</Button> -->
				</span>
			</div>
		</Collapsible.Content>
	</Collapsible.Root>
	<Collapsible.Root open class="space-y-2">
		<Collapsible.Trigger
			class="flex gap-2 items-center border w-full bg-white border-gray-200 shadow-sm px-6 py-3 [&[data-state=open]]:bg-gray-50"
		>
			<LucideSquare class="size-4 mr-2 text-gray-600" />
			<h3 class=" w-full font-mono text-sm text-gray-700 text-start">2. Add Your Resume</h3>
			<LucideChevronsUpDown class="size-4" />
		</Collapsible.Trigger>

		<Collapsible.Content>
			<div
				class=" bg-white space-y-2 border px-4 py-3 font-mono text-sm h-fit grid grid-rows-[1fr_auto_auto]"
			>
				<span
					id="resumeTextbox"
					placeholder={resumePlaceholder}
					class=" w-full resize-none rounded-3xl border-none p-3 text-stone-900 outline-none empty:text-gray-400/80"
					contenteditable="plaintext-only"
				/>
				<span class="text-end">
					<span class="text-xs text-gray-500 font-mono"> 0/1000 Words </span>
					<!-- <Button
						href="/generate"
						variant="secondary"
						size="sm"
						class="font-mono font-medium w-fit "
					>
						Next
					</Button> -->
				</span>
			</div>
		</Collapsible.Content>
	</Collapsible.Root>

	<Button variant="default" size="lg" disabled class="w-full font-mono">
		<LucidePlus class="size-4 mr-2" />
		Generate Essay
	</Button>
</div>

<!-- <Prompter /> -->

<style>
	#jobDescription:empty::before {
		content: attr(placeholder);
	}
	#resumeTextbox:empty::before {
		content: attr(placeholder);
	}
</style>
