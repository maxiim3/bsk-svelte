<script lang="ts">
	import Avatar from '$lib/user/avatar/avatar.ui.svelte';
	import type { UserInfo } from '$lib/user/user/user.domain';
	import { userStore } from '$lib/user/user/user.store.svelte';
	import { MessageSquare, Repeat2, Heart, Share2 } from '@lucide/svelte';

	interface Props {
		author: UserInfo;
	}

	const { author }: Props = $props();

	const id = String(Math.floor(Math.random() * 1_000_000));
	let isLiked = $state(false);

	function onLike() {
		if (isLiked) {
			isLiked = false;
			userStore.doUnlike(id);
		} else {
			isLiked = true;
			userStore.doLike(id);
		}
	}
</script>

<article class="border-base-300 text-base-content grid grid-cols-[auto_1fr] border-b p-4">
	<section class="relative pr-4">
		<div class="avatar avatar-offline transition-transform duration-300 group-hover:scale-50">
			<Avatar avatar={author.avatar} />
			<a href="/profile" class="absolute inset-0" aria-label={author.name}></a>
		</div>
	</section>
	<section>
		<header class="group relative flex items-baseline gap-2">
			<h1 class="font-bold group-hover:underline">{author.name}</h1>
			<h2 class="text-sm text-neutral-500">{`@${author.username}`}</h2>
			<p class="text-sm text-neutral-500">{'19m'}</p>
			<a href="/profile" class="absolute inset-0" aria-label={author.name}></a>
		</header>
		<main>
			<span>{'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</span>
			<a href="#" class="text-blue-500 hover:underline">{'#blamdit'}</a>
			<span
				>{'soluta dicta iste ullam eveniet ea, provident voluptatibus, accusantium aliquid itaque, deserunt.'}</span
			>
		</main>
		<footer class="flex gap-[20%] pt-4">
			<button class="btn-ghost btn-circle btn text-neutral-500">
				<MessageSquare size={20} />
			</button>
			<button class="btn-ghost btn-circle btn text-neutral-500"><Repeat2 size={20} /></button>
			<button
				class={['btn-ghost btn-circle btn', isLiked ? 'bg-pink-500' : 'text-neutral-500']}
				onclick={() => onLike()}
			>
				<Heart size={20} />
			</button>
			<button class="btn-ghost btn-circle btn text-neutral-500"><Share2 size={20} /></button>
		</footer>
	</section>
</article>
