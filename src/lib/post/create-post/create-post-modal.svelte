<script lang="ts">
	import { postCreationModal } from './post-creation-modal.state.svelte';

	let modal = $state() as HTMLDialogElement;

	$effect(() => {
		if (postCreationModal.isOpen) modal.showModal();
		else modal.close();
	});
</script>

<!-- Open the modal using ID.showModal() method -->
<dialog bind:this={modal} class="modal modal-bottom sm:modal-middle" onclose={postCreationModal.close}>
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
		<button onclick={postCreationModal.close}>Closw</button>
	</form>
</dialog>
