import type { ImageData } from '$lib/root/atoms/image.domain';
import type { ClassValue } from 'svelte/elements';

// Base data for entity
export interface AvatarData extends ImageData {
	userId: string;
	isOnline: boolean;
}

// Class model
export class Avatar implements AvatarData {
	constructor(
		public source: string,
		public altText: string,
		public userId: string,
		public isOnline: boolean
	) {}
}

// Component Interface
export interface AvatarUIProps {
	avatar: Avatar;
	styles?: ClassValue;
}
