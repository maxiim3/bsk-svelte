<script lang="ts">
	import { page } from '$app/state';
	import Avatar from '$lib/user/avatar/avatar.ui.svelte';
	import { userStore } from '$lib/user/user/user.store.svelte';
	import { navigationItems } from '$lib/app-navigation/navigation-item.domain';
	import NavigationButton from '$lib/app-navigation/navigation-button.svelte';
	import CreatePostButton from '$lib/post/create-post/create-post-button.svelte';
	import Username from '$lib/user/username/username.svelte';
</script>

<nav class="sticky top-0 flex w-full flex-col items-end gap-8 pt-4 pr-4">
	<section class="flex flex-col gap-0.5">
		<div class=" @sidebar:mb-6 mb-3 flex w-full flex-col items-center justify-center">
			<Avatar avatar={userStore.user!.avatar} styles="w-12" />
			<p class="">{userStore.user!.name}</p>
			<Username name={userStore.user!.username} styles="text-sm" />
		</div>
		{#each navigationItems as item (item.title)}
			<NavigationButton {item} isActive={item.path === page.url.pathname} />
		{/each}
		<CreatePostButton styles="mt-4 @sidebar:mt-12" />
	</section>
</nav>
