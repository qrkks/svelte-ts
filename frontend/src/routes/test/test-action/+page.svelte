<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();

	let name = $state('test');
</script>



<form method="post" action="?/submit" use:enhance>
	<input type="text" name="name" bind:value={name} />
	<button type="submit">Submit</button>
</form>

<p>name: {name}</p>
<p>form: {form?.name}</p>
