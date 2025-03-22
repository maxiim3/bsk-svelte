<script lang="ts">
	import MainNavBar from '$lib/components/main-nav-bar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-base-100 grid grid-cols-[30lvw_1fr] lg:grid-cols-[28lvw_1fr_28lvw]">
	<MainNavBar />
	<main class="border-base-300 min-h-lvh border-x">
		{@render children()}
	</main>
	<side class="hidden justify-self-start p-4 lg:block">
		<p>Side bar</p>
	</side>
</div>
