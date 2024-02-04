import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { OPENAI_API_KEY } from '$env/static/private';

export const POST: RequestHandler = async ({ url, request }) => {
	const { generated, prompt } = await request.json();

	const translationMessages: any[] = [
		{ role: 'system', content: SYSTEM_PROMPT },
		{
			role: 'user',
			content: `Cover Letter:\n${generated}\n\nUser Prompt:\n${prompt}\n\n`
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

const SYSTEM_PROMPT = `You are given a cover letter. Following the user's prompt, modify the given cover letter where it is necessary.`;
