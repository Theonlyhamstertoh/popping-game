import { ELEVEN_LABS_API_KEY } from '$env/static/private';
import type { Actions } from './$types';

export const actions: Actions = {
	generate: async ({ request, locals, cookies, fetch }) => {
		// console.log('REGISTER');
		// const authMethods = await locals.pb.collection('users').listAuthMethods();
		// // console.log(authMethods);
		// const googleProvider = authMethods.authProviders[0];
		// if (!googleProvider) {
		// 	console.log('Provider not found');
		// 	throw redirect(303, '/');
		// }
		// cookies.set('state', googleProvider.state, {
		// 	path: '/'
		// 	// httpOnly: true,
		// 	// sameSite: 'strict',
		// 	// secure: NODE_ENV === 'production',
		// 	// maxAge: 60 * 60 * 24 * 30 // expire after a month
		// });
		// fetch(
		// 	`/api/v1/login?state=${googleProvider.state}&code=${googleProvider.codeVerifier}&codeVerifier`
		// );
		// console.log('setting cookie', cookies.get('state'));
	}
};
