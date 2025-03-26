<script lang="ts">
	import type { UsernameUIProps } from './username.domain';

	const props: UsernameUIProps = $props();
	const tag = props?.to ? 'a' : 'span';
</script>

<svelte:element this={tag} class={['text-neutral-500', props?.styles]} href={props?.to}>{`@${props.name}`}</svelte:element>
