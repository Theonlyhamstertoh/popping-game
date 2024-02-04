import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OPENAI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ url, request }) => {
	const { jobDescription, resume, generated, prompt } = await request.json();

	const translationMessages: any[] = [
		{ role: 'system', content: SYSTEM_PROMPT },
		{
			role: 'user',
			content: `User Prompt:\n${prompt}\n\nCover Letter:\n${generated}\n\nResume:${resume}`
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

const SYSTEM_PROMPT = `Modify the current cover letter, max 200 words for the provided job description and the user's resume. Craft a cover letter with greater burstiness and perplexity. Follow this format: 

Dear Hiring Manager,

Paragraph #1: Mention the Job title / or internship & how you found it

Paragraph #2: Mention why you think you would be a good fit, speak about your background & skills. This should be customized for this specific position. How much you put here is really up to you. Keep it short

Paragraph #3: Mention your availability, are you available for in-person interview, phone interview, are you from out of town, etc. If you are student, when would you be available.

Signature: Name & contact information
`;
