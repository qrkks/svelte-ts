<script lang="ts">
	import { page } from '$app/state';
	import { enhance } from '$app/forms';
	let { data } = $props();

	$effect(() => {
		fetch('/test/test-all-data/api')
			.then((res) => res.json())
			.then((data) => {
				fetchData = data;
			});
	});

	let fetchData = $state();
</script>

<h2>Message from fetch</h2>
<pre>{JSON.stringify(fetchData, null, 2)}</pre>

<h2>Page Data from page</h2>
<pre>{JSON.stringify(page, null, 2)}</pre>

<h2>Page Data from data</h2>
<pre>{JSON.stringify(data, null, 2)}</pre>

<form method="post" use:enhance action="/test/test-all-data">
	<button type="submit">Submit</button>
</form>
