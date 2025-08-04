<script lang="ts">
	import type { LayoutProps } from './$types';
	import { page } from '$app/state';

	let { children }: LayoutProps = $props();
	let isChild = $derived(page.url.pathname !== '/test');
</script>

{#if isChild}
	<nav>
		<button type="button" class="cursor-pointer" onclick={() => history.back()}>back</button>
	</nav>
{/if}

{@render children()}
