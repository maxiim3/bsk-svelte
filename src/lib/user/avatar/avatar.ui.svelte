<script lang="ts">
	import type { AvatarUIProps } from './avatar.domain';

	const { avatar, styles }: AvatarUIProps = $props();
</script>

<div class={['avatar', styles]} class:avatar-online={avatar.isOnline}>
	<div class="w-full rounded-full">
		<img alt={avatar.altText} src={avatar.source} />
	</div>
</div>
