import { Avatar } from '$lib/user/avatar/avatar.domain';
import { Banner } from '$lib/user/banner/banner.domain';
import { UserInfo } from '$lib/user/user/user.domain';
// Create fake users with realistic data
export const sarahJohnson = new UserInfo(
	'Sarah Johnson',
	'sarahj',
	'user_001',
	new Avatar(
		'https://randomuser.me/api/portraits/women/1.jpg',
		'Sarah Johnson profile picture',
		'user_001',
		false
	),
	new Banner(
		'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
		'Colorful abstract banner',
		'user_001'
	)
);

export const michaelChen = new UserInfo(
	'Michael Chen',
	'mikechen',
	'user_002',
	new Avatar(
		'https://randomuser.me/api/portraits/men/2.jpg',
		'Michael Chen profile picture',
		'user_002',
		false
	),
	new Banner(
		'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
		'Night sky banner',
		'user_002'
	)
);

export const emmaRodriguez = new UserInfo(
	'Emma Rodriguez',
	'emmar',
	'user_003',
	new Avatar(
		'https://randomuser.me/api/portraits/women/3.jpg',
		'Emma Rodriguez profile picture',
		'user_003',
		true
	),
	new Banner(
		'https://images.unsplash.com/photo-1501426649117-27c827d82001',
		'Sunset beach banner',
		'user_003'
	)
);

export const jamesWilson = new UserInfo(
	'James Wilson',
	'jwilson',
	'user_004',
	new Avatar(
		'https://randomuser.me/api/portraits/men/4.jpg',
		'James Wilson profile picture',
		'user_004',
		false
	),
	new Banner(
		'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
		'Mountain landscape banner',
		'user_004'
	)
);

export const aishaPatel = new UserInfo(
	'Aisha Patel',
	'aishap',
	'user_005',
	new Avatar(
		'https://randomuser.me/api/portraits/women/5.jpg',
		'Aisha Patel profile picture',
		'user_005',
		true
	),
	new Banner(
		'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
		'Tropical beach banner',
		'user_005'
	)
);

export const mockUsers = [sarahJohnson, michaelChen, emmaRodriguez, jamesWilson, aishaPatel];
