class PostCreationModal {
	isOpen: boolean = $state(false);

	toggle = () => {
		this.isOpen = !this.isOpen;
	};

	open = () => {
		this.isOpen = true;
	};

	close = () => {
		this.isOpen = false;
	};
}

export const postCreationModal = new PostCreationModal();
