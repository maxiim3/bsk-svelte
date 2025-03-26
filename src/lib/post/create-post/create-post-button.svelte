<script lang="ts">
	import ActionButton from '$lib/ui/atoms/action-button.svelte';
	import { CirclePlus } from '@lucide/svelte';
	import { postCreationModal } from './post-creation-modal.state.svelte';
	import type { ClassValue } from 'svelte/elements';

	const { styles }: { styles?: ClassValue } = $props();
</script>

<ActionButton {styles} label="New Post" Icon={CirclePlus} action={postCreationModal.open} />
