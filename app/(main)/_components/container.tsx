"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useIsClient, useMediaQuery } from "usehooks-ts";

interface ContainerProps {
	children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	const isClient = useIsClient();
	const { isCollapsed, onCollapse, onExpand, onHide, onShow, isHidden } =
		useSidebar((state) => state);
	const [restoreCollapsed, setRestoreCollapsed] = useState(false);
	const isScreenUnderLarge = useMediaQuery("(max-width: 1024px)");
	const isScreenUnderMedium = useMediaQuery("(max-width: 768px)");

	useEffect(() => {
		if (isScreenUnderLarge) {
			setRestoreCollapsed(isCollapsed);
			onCollapse();
		} else {
			if (!restoreCollapsed) {
				onExpand();
			}
		}
	}, [isScreenUnderLarge]);

	useEffect(() => {
		if (isScreenUnderMedium) {
			onHide();
		} else {
			if (isScreenUnderLarge) {
				onCollapse();
			}
			onShow();
		}
	}, [isScreenUnderMedium]);

	if (!isClient) {
		return <div className="h-full pl-0 md:pl-16 lg:pl-44">{children}</div>;
	}

	return (
		<div
			style={{ transition: "padding-left 0.5s" }}
			className={cn(
				"h-full w-full",
				isCollapsed && "pl-16",
				!isCollapsed && !isScreenUnderMedium && "pl-44",
				isHidden && "pl-0"
			)}
		>
			{children}
		</div>
	);
};
