<script lang="ts">
	import BskPost from '$lib/ui/bsk-post.svelte';
	import { userStore } from '$lib/user/user/user.store.svelte';
	import { Origami } from '@lucide/svelte';

	import * as fakeUser from '$lib/mockDB/users.fake.svelte';
</script>

<header class="border-base-300 bg-base-100 sticky top-0 z-10 flex flex-col gap-2 border-b p-2">
	<div class="grid place-content-center"><Origami class="fill-info" size={32} /></div>
	<ul>
		<li class="underline">My Feed</li>
	</ul>
</header>

{#if userStore.user}
	<section class="isolate">
		<BskPost author={fakeUser.aishaPatel} />
		<BskPost author={fakeUser.michaelChen} />
		<BskPost author={userStore.user} />
		<BskPost author={fakeUser.jamesWilson} />
		<BskPost author={userStore.user} />
		<BskPost author={fakeUser.sarahJohnson} />
		<BskPost author={fakeUser.michaelChen} />
		<BskPost author={fakeUser.jamesWilson} />
		<BskPost author={userStore.user} />
		<BskPost author={fakeUser.jamesWilson} />
		<BskPost author={userStore.user} />
		<BskPost author={fakeUser.michaelChen} />
		<BskPost author={userStore.user} />
		<BskPost author={fakeUser.michaelChen} />
		<BskPost author={fakeUser.michaelChen} />
		<BskPost author={userStore.user} />
		<BskPost author={userStore.user} />
		<BskPost author={fakeUser.sarahJohnson} />
		<BskPost author={fakeUser.sarahJohnson} />
		<BskPost author={userStore.user} />
		<BskPost author={userStore.user} />
		<BskPost author={fakeUser.aishaPatel} />
		<BskPost author={userStore.user} />
		<BskPost author={userStore.user} />
		<BskPost author={userStore.user} />
	</section>
{/if}
