import { SvelteSet } from 'svelte/reactivity';
import { Avatar } from '../avatar/avatar.domain';
import { Banner } from '../banner/banner.domain';
import { UserInfo } from './user.domain';

class CounterManager<T> {
	public ids: Set<T> = $state(new SvelteSet());
	public count: number = $state(0);
}

class UserStore {
	user: UserInfo | null = $state(null);
	following = new CounterManager<string>();
	follower = new CounterManager<string>();
	posts = new CounterManager<string>();
	replies = new CounterManager<string>();
	likes = new CounterManager<string>();

	constructor(id: string) {
		const userAvatar = new Avatar(
			'https://cdn.bsky.app/img/avatar/plain/did:plc:jleriqwstmtv7nlawa6dsgzy/bafkreiapzazm6dqjne2nxpe7vdqo2czvlzap3bphytwphj2ononhfmiyru@jpeg',
			'Profile picture for Max',
			id,
			true
		);

		const userBanner = new Banner('https://placehold.co/600x400', 'Profile banner', '123');
		this.user = new UserInfo('Maxime', 'maxiim3', id, userAvatar, userBanner);
	}

	doLike = (postId: string) => {
		if (this.likes.ids.has(postId)) {
			console.error(new Error('post Id already in DB'));
			return;
		}
		this.likes.ids.add(postId);
		this.likes.count += 1;
	};

	doUnlike = (postId: string) => {
		if (!this.likes.ids.has(postId)) {
			console.error(new Error('You are trying to unlike a post not in DB'));
			return;
		}
		this.likes.ids.delete(postId);
		this.likes.count -= 1;
	};
}

export const userStore = new UserStore('maxiim3-123');
