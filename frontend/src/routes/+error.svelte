<script lang="ts">
	import { page } from '$app/state';
	let { error, status } = page;
</script>

<h2>这里是错误边界页面</h2>
<p>错误信息：{error?.message}</p>
<p>错误代码：{status}</p>
