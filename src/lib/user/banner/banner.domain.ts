import type { ImageData } from '$lib/root/atoms/image.domain';

// Base data for the model
export interface BannerData extends ImageData {
	userId: string;
}

// Model to use and consume
export class Banner implements BannerData {
	constructor(
		public source: string,
		public altText: string,
		public userId: string
	) {}
}

// UI interface
export interface BannerUIProps {
	banner: Banner;
}
