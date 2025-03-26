<script lang="ts">
	import type { NavigationButtonProps } from './navigation-button.types';

	const { item, isActive }: NavigationButtonProps = $props();
</script>

<a href={item.path} data-active={isActive} class="group btn btn-block btn-ghost @sidebar:w-full flex w-fit items-center justify-start gap-2 rounded-md">
	<item.Icon />
	<span
		class={[
			'hidden',
			'@sidebar:block',
			'text-lg transition-transform duration-200',
			isActive ? 'font-bold' : 'font-light',
			isActive ? 'translate-x-2' : 'group-hover:translate-x-2'
		]}
	>
		{item.title}
	</span>
</a>
