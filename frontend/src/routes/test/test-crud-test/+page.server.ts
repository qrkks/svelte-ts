import { db } from '$lib/server/db';
import { test } from '$lib/server/db/schema';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { desc, eq } from 'drizzle-orm';

export const load = async () => {
	const data = await db.select().from(test).orderBy(desc(test.createdAt));
	return { data };
};

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const testField = formData.get('testField') as string | null;
		if (!testField) {
			return fail(400, { error: 'testField 不能为空' });
		}
		await db.insert(test).values({ testField });
		return { success: true };
	},
	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = Number(formData.get('id'));
		await db.delete(test).where(eq(test.id, id));
		return { success: true };
	}
};
