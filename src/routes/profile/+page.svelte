<script lang="ts">
	import BskPost from '$lib/ui/bsk-post.svelte';
	import AvatarUI from '$lib/user/avatar/avatar.ui.svelte';
	import BannerUI from '$lib/user/banner/banner.ui.svelte';
	import { userStore } from '$lib/user/user/user.store.svelte';

	$effect(() => {
		console.log(userStore.likes.count);
	});
</script>

<header class="border-base-300 flex flex-col gap-2 border-b p-2">
	<BannerUI banner={userStore.user!.banner} />
	<AvatarUI avatar={userStore.user!.avatar} />
	<h1>{userStore.user?.name}</h1>
	<p>likes: {userStore.likes.count}</p>
</header>

{#if userStore.user}
	<section>
		<BskPost author={userStore.user!} />
		<BskPost author={userStore.user!} />
		<BskPost author={userStore.user!} />
		<BskPost author={userStore.user!} />
		<BskPost author={userStore.user!} />
		<BskPost author={userStore.user!} />
	</section>
{/if}
