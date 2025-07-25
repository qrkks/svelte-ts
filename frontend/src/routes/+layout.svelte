<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	import { page } from '$app/state';

	let { children, data }: LayoutProps = $props();
</script>

<header>
	<h1>Home Page</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/settings">Settings</a>
		<a href="/test">Test</a>
	</nav>
</header>

<h2>Layout Page </h2>
<pre>{JSON.stringify(page, null, 2)}</pre>

<h2>Layout Data</h2>
<pre>{JSON.stringify(data, null, 2)}</pre>

<main>
	{@render children()}
</main>

<footer>
	<p>Copyright 2025</p>
</footer>
