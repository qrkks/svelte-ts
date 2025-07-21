<script lang="ts">
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
	console.log(data.pages);
</script>

<h1>Test</h1>
<ul>
	{#each data.pages as page}
		<li><a href={page}>{page}</a></li>
	{/each}
</ul>
