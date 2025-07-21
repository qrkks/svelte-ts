<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	import { page } from '$app/state';

	let { data, form }: PageProps = $props();
	$effect(() => {
		console.log('data', data);
		console.log('form', form);
		console.log('page', page);
	});

	let testField = $state('');
</script>

<p class="text-blue-500">testField: {testField}</p>
<form action="?/create" method="post" use:enhance>
	<input type="text" name="testField" bind:value={testField} />
	<button type="submit">Create</button>
	{#if form?.error}
		<p style="color: red;">{form.error}</p>
	{/if}
</form>
