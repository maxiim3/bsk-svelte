<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	let { styles, children }: { styles?: ClassValue; children: Snippet } = $props();
</script>

<div class={['bg-base-100 @container relative isolate', styles]}>
	{@render children()}
</div>
