<script lang="ts">
	import { CoverLetter, FileBadge, GridCard, Hero, Prompter } from '$lib';

	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';

	import * as Tabs from '$lib/components/ui/tabs';
	import { Button } from '$lib/components/ui/button';
	import LucideArrowRight from '~icons/lucide/arrow-right';
	import { Separator } from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
</script>

<Hero />

<div
	class="grid w-full grid-cols-1 lg:grid-cols-3 gap-4 relative px-3 py-8 mx-auto max-w-fit lg:max-w-screen-lg bg-gradient-to-b from-white/70 to-white"
>
	<GridCard
		href="/cover-letter"
		title="Cover Letter"
		description="Generate the letter tailored to the job application and your resume"
	/>
	<GridCard
		title="Essay"
		comingSoon
		description="Write an essay in seconds in your writing style "
	/>
	<GridCard
		title="College Statement"
		comingSoon
		description="Highlight your personality and experiences for college applications"
	/>
	<GridCard
		comingSoon
		title="Email"
		description="Craft the impression and get back with the response you want"
	/>

	<GridCard
		title="Quiz Yourself"
		comingSoon
		class="lg:col-span-2"
		description="Upload and quiz yourself on any source of documents	"
	/>
</div>
<p class="my-6 text-sm text-center text-gray-500">Made by students. For free.</p>
