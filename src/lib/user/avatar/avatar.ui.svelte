<script lang="ts">
	import type { AvatarUIProps } from './avatar.domain';

	const { avatar, size }: AvatarUIProps = $props();
</script>

<div class="avatar w-fit" class:avatar-online={avatar.isOnline}>
	<div class={['rounded-full', `w-${size || '12'}`]}>
		<img alt={avatar.altText} src={avatar.source} />
	</div>
</div>
