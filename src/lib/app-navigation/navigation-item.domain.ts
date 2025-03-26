import { House, Bell, MessageCircleMore, Hash, CircleUser, Settings2, List, CirclePlus, type IconProps } from '@lucide/svelte';
import type { IconProps } from '@lucide/svelte';
import type { Component } from 'svelte';

export interface NavigationItemSchema {
	title: string;
	path: string;
	Icon: Component<IconProps>;
}

export const navigationItems: NavigationItemSchema[] = [
	{
		title: 'Home',
		path: '/',
		Icon: House
	},
	{
		title: 'Notifications',
		path: '/notifications',
		Icon: Bell
	},
	{
		title: 'Messages',
		path: '/messages',
		Icon: MessageCircleMore
	},
	{
		title: 'Explore',
		path: '/explore',
		Icon: Hash
	},
	{
		title: 'Lists',
		path: '/lists',
		Icon: List
	},
	{
		title: 'Profile',
		path: '/profile',
		Icon: CircleUser
	},
	{
		title: 'Settings',
		path: '/settings',
		Icon: Settings2
	}
];
