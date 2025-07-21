const pages = import.meta.glob('/src/routes/test/**/+page.svelte', { eager: true });

export const load = async () => {
	return {
		pages: Object.keys(pages).map((path) => {
			return path.replace('/src/routes/', '').replace('/+page.svelte', '');
		})
	};
};
