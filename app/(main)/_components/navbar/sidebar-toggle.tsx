"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/use-sidebar";
import { Menu } from "lucide-react";

export const SidebarToggle = () => {
	const { onExpand, onShow, isCollapsed } = useSidebar((state) => state);
	const onClick = () => {
		if (isCollapsed) {
			onExpand();
		}
		onShow();
	};

	return (
		<Button
			variant="outline"
			size="icon"
			className="dark:bg-neutral-900"
			onClick={onClick}
		>
			<Menu className="h-8 w-8 text-muted-foreground" />
		</Button>
	);
};
