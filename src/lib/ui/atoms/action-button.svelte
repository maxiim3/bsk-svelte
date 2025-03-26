<script lang="ts">
	import type { IconProps } from '@lucide/svelte';
	import type { Component } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	interface ActionButtonProps {
		label?: string;
		Icon?: Component<IconProps>;
		action?: () => void;
		styles?: ClassValue;
	}

	const { label, action, Icon, styles }: ActionButtonProps = $props();
</script>

<button class={['btn bg-info @sidebar:w-full flex w-fit items-center justify-start gap-2 rounded-md p-6', styles]} onclick={action}>
	{#if Icon}
		<Icon />
	{/if}
	{#if label}
		<span class="@sidebar:block hidden">{label}</span>
	{/if}
</button>
