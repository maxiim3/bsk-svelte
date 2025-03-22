<script lang="ts">
	import {
		House,
		Bell,
		MessageCircleMore,
		Hash,
		CircleUser,
		Settings2,
		List,
		CirclePlus
	} from '@lucide/svelte';
	import { page } from '$app/state';
	import Avatar from '$lib/user/avatar/avatar.ui.svelte';
	import { userStore } from '$lib/user/user/user.store.svelte';

	interface Item {
		title: string;
		path: string;
		icon: typeof House;
	}
	const items: Item[] = [
		{
			title: 'Home',
			path: '/',
			icon: House
		},
		{
			title: 'Notifications',
			path: '/notifications',
			icon: Bell
		},
		{
			title: 'Messages',
			path: '/messages',
			icon: MessageCircleMore
		},
		{
			title: 'Explore',
			path: '/explore',
			icon: Hash
		},
		{
			title: 'Lists',
			path: '/lists',
			icon: List
		},
		{
			title: 'Profile',
			path: '/profile',
			icon: CircleUser
		},
		{
			title: 'Settings',
			path: '/settings',
			icon: Settings2
		}
	];

	let openModal = $state(false);
	let modal: HTMLDialogElement = $state();

	$effect(() => {
		if (openModal) modal.showModal();
	});
</script>

<nav class="relative isolate w-full justify-self-end p-4">
	<div class="sticky top-8 right-0">
		<div class="space-y-8">
			<header
				class="bg-base-300 group flex gap-2 rounded-4xl p-2 transition-all duration-200 hover:rounded-md"
			>
				<Avatar avatar={userStore.user!.avatar} />
				<div class="hidden text-sm sm:block">
					<h2>{userStore!.user.name}</h2>
					<p>{userStore!.user.username}</p>
				</div>
			</header>

			<section class="flex flex-col gap-0.5">
				{#each items as item (item.title)}
					{@const isActive = item.path === page.url.pathname}
					<a
						href={item.path}
						data-active={isActive}
						class="group btn btn-block btn-ghost flex items-center justify-start gap-2 rounded-4xl p-6"
					>
						<svelte:component this={item.icon}></svelte:component>
						<span
							class={[
								'hidden text-lg transition-transform duration-200 sm:block',
								isActive ? 'font-bold' : 'font-light',
								isActive ? 'translate-x-2' : 'group-hover:translate-x-2'
							]}
						>
							{item.title}
						</span>
					</a>
				{/each}
			</section>

			<button
				class="btn bg-info flex w-full items-center justify-start gap-2 rounded-4xl p-6"
				onclick={() => (openModal = true)}
			>
				<CirclePlus />
				<h3 class="hidden sm:block">New Post</h3>
			</button>
			<!-- Open the modal using ID.showModal() method -->
			<dialog
				bind:this={modal}
				class="modal modal-bottom sm:modal-middle"
				onclose={() => (openModal = false)}
			>
				<div class="modal-box">
					<form method="dialog">
						<button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button>
					</form>
					<h3 class="text-lg font-bold">Hello!</h3>
					<p class="py-4">Press ESC key or click the button below to close</p>
					<div class="modal-action">
						<form method="dialog">
							<!-- if there is a button in form, it will close the modal -->
							<button class="btn">Close</button>
						</form>
					</div>
				</div>
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	</div>
</nav>
