import type { NavigationItemSchema } from './navigation-item.domain';

export interface NavigationButtonProps {
	item: NavigationItemSchema;
	isActive?: boolean;
}
