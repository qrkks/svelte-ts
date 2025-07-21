<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<header>
	<h1>Home Page</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/settings">Settings</a>
		<a href="/about">About</a>
		<a href="/test">Test</a>
	</nav>
</header>
<main>
	{@render children()}
</main>
<footer>
	<p>Copyright 2025</p>
</footer>
