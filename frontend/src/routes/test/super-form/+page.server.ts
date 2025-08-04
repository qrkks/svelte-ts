import { fail } from '@sveltejs/kit';

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const text = formData.get('text');
		if (!text) {
			return fail(400, { error: 'Text is required' });
		}
		const date = await new Promise((resolve) =>
			setTimeout(() => resolve(new Date().toLocaleString()), 1000)
		);
		return { success: true, date, text };
	}
};
