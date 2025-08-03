<script lang="ts">
	import { page } from '$app/state';
</script>

<h2>Test {page.params.id} from client params</h2>
<h2>Test {page.url.searchParams.get('id')} from client query</h2>

<a href="/test/dynamicRoute123?id=query123">Test 123</a>
<a href="/test/dynamicRoute456?id=query456">Test 456</a>
<a href="/test/dynamicRoute789?id=query789">Test 789</a>
