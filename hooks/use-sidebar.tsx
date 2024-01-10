import { create } from "zustand";

interface SidebarStore {
	isCollapsed: boolean;
	isHidden: boolean;
	onExpand: () => void;
	onCollapse: () => void;
	onShow: () => void;
	onHide: () => void;
	isSecondaryHidden: boolean;
	onShowSecondary: () => void;
	onHideSecondary: () => void;
}

export const useSidebar = create<SidebarStore>((set) => ({
	isCollapsed: false,
	isHidden: false,
	onShow: () => set({ isHidden: false }),
	onHide: () => set({ isHidden: true }),
	onExpand: () => set({ isCollapsed: false }),
	onCollapse: () => set({ isCollapsed: true }),
	isSecondaryHidden: false,
	onShowSecondary: () => set({ isSecondaryHidden: false }),
	onHideSecondary: () => set({ isSecondaryHidden: true }),
}));
