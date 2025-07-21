import type { Actions } from './$types';

export const actions: Actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const newName = Math.random() > 0.5 ? 'test' : 'not test';
		return { name, newName };
	}
};
