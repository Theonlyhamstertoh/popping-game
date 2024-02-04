import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OPENAI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ url, request }) => {
	const { jobDescription, resume, prompt } = await request.json();
	// const min = Number(url.searchParams.get('min') ?? '0');
	// const max = Number(url.searchParams.get('max') ?? '1');

	const translationMessages: any[] = [
		{ role: 'system', content: SYSTEM_PROMPT },
		{
			role: 'user',
			content: `Im going to give you a position, company name, and job description and you write me a ATS-approved cover letter using the following resume as a reference:\n\n Job Description:\n${jobDescription}\n\nResume:\n${resume}\n\nAdditional Instruction:${prompt}`
		}
	];

	console.time();
	const res = await fetch(
		'https://gateway.ai.cloudflare.com/v1/7727598a75c80d2611016ea5efaee1fe/jello-workers-ai/openai/chat/completions',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${OPENAI_API_KEY} `,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				model: 'gpt-3.5-turbo-1106',
				messages: translationMessages
			})
		}
	);
	console.timeEnd();
	const openAIData = await res.json();

	const content = openAIData.choices[0].message.content;

	console.log(content);

	return json(content);
};

const SYSTEM_PROMPT = `Generate a cover letter, max 400 words for the provided job description and the user's resume. Craft a cover letter with greater burstiness and perplexity.`;
