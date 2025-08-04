<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	const url = $derived(page.url);
	console.log(page);
	let submitting = $state(false);

	let { data, form } = $props();
	console.log('form', form);

	function action(node: HTMLElement) {
		console.log(node);
	}
</script>

<pre>{JSON.stringify(url, null, 2)}</pre>
<p>{page.form?.success}</p>
<p>{page.form?.date}</p>
<p>{page.form?.text}</p>
<p class="text-red-500">{page.form?.error}</p>
<p class="text-cyan-500" use:action>{form?.error}</p>
<form
	method="post"
	action="?/submit"
	use:enhance={() => {
		submitting = true;
		return async ({ update, result }) => {
			submitting = false;
			update();
			console.log(result);
		};
	}}
>
	<input type="text" name="text" />
	<button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
</form>
