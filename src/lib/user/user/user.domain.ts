import type { Avatar } from '../avatar/avatar.domain';
import type { Banner } from '../banner/banner.domain';

// Base User characteristics
export interface UserInfoData {
	name: string;
	username: string;
	id: string;
	avatar: Avatar;
	banner: Banner;
}

export class UserInfo implements UserInfoData {
	constructor(
		public name: string,
		public username: string,
		public id: string,
		public avatar: Avatar,
		public banner: Banner
	) {}
}
