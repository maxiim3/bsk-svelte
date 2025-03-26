<script lang="ts">
	import SidebarContainer from '$lib/ui/containers/SidebarContainer.svelte';
	import MainNavBar from '$lib/ui/main-nav-bar.svelte';
	import CreatePostModal from '$lib/post/create-post/create-post-modal.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-base-100 flex min-h-lvh w-lvw justify-center overflow-x-hidden">
	<SidebarContainer styles="max-md:hidden max-w-xs flex-1">
		<MainNavBar />
	</SidebarContainer>
	<main class="border-base-300 max-w-[680px] flex-1 border-x md:min-w-[38rem]">
		{@render children()}
	</main>
	<SidebarContainer styles="hidden lg:block max-w-xs flex-1">
		<div class="h-full w-full border border-dashed px-4 py-4">COUCOU</div>
	</SidebarContainer>

	<CreatePostModal />
</div>
