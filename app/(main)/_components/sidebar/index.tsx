"use client";

import { useIsClient, useMediaQuery, useOnClickOutside } from "usehooks-ts";
import { Logo } from "./logo";
import { useRef } from "react";
import { useSidebar } from "@/hooks/use-sidebar";
import {
	PlayCircle,
	Eye,
	Newspaper,
	Users,
	LucideIcon,
	MoreHorizontal,
} from "lucide-react";
import { RouteList } from "./route-list";
import { Membership } from "./membership";
import { Search } from "./search";
import { AuthButtons } from "./auth-buttons";
import { ThemeToggle } from "./theme-toggle";
import { Settings } from "./settings";
import { Language } from "./language";
import { Help } from "./help";
import { CollapseToggle } from "./collapse-toggle";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { CloseToggle } from "./close-toggle";

const routes = [
	{
		href: "/play",
		label: "Play",
		icon: PlayCircle,
	},
	{
		href: "/watch",
		label: "Watch",
		icon: Eye,
	},
	{
		href: "/news",
		label: "News",
		icon: Newspaper,
	},
	{
		href: "/social",
		label: "Social",
		icon: Users,
	},
	{
		href: "/more",
		label: "More",
		icon: MoreHorizontal,
	},
];

export type Route = {
	href: string;
	label: string;
	icon: LucideIcon;
};

interface SidebarProps {
	isAuthenticated: boolean;
}

export const Sidebar = ({ isAuthenticated }: SidebarProps) => {
	const isClient = useIsClient();
	const { isCollapsed, isHidden, onHide } = useSidebar((state) => state);
	const isScreenUnderLarge = useMediaQuery("(max-width: 1024px)");
	const isScreenUnderMedium = useMediaQuery("(max-width: 768px)");
	const sidebarRef = useRef(null);
	useOnClickOutside(
		sidebarRef,
		() => {
			if (isScreenUnderMedium) {
				onHide();
			}
		},
		"mousedown"
	);

	if (!isClient) return <SidebarSkeleton isAuthenticated={isAuthenticated} />;

	return (
		<aside
			ref={sidebarRef}
			style={{ transition: "width 0.5s" }}
			className={cn(
				`fixed z-[20] inset-y-0 left-0 flex 
				bg-neutral-50 dark:bg-neutral-950 border-r dark:border-r-neutral-700 border-r-neutral-200 flex-col 
				justify-between overflow-hidden`,
				isCollapsed ? "w-16" : "w-44",
				isHidden && "w-0"
			)}
		>
			<div className="w-full flex flex-col relative">
				<Logo />
				<RouteList routes={routes} />
				{isAuthenticated && <Membership />}
				<Search />
				{!isAuthenticated && <AuthButtons />}
			</div>

			<div className="w-full flex flex-col relative">
				{isScreenUnderMedium && <CloseToggle />}
				{!isScreenUnderLarge && isAuthenticated && <CollapseToggle />}
				{isAuthenticated && (
					<>
						<ThemeToggle />
						<Settings />
					</>
				)}
				<Language />
				<Help />
			</div>
		</aside>
	);
};

export const SidebarSkeleton = ({ isAuthenticated }: SidebarProps) => {
	return (
		<aside className="fixed dark:bg-neutral-700 left-0 h-full hidden md:flex md:w-16 lg:w-44 bg-neutral-50 border-r flex-col justify-between overflow-hidden">
			<div className="w-full flex flex-col relative">
				{[...Array(6)].map((_, i) => (
					<Skeleton
						key={i}
						className="w-full h-16  border-b border-b-neutral-150"
					/>
				))}

				<div className="w-full flex flex-col gap-y-2 items-center py-2 px-3">
					<Skeleton className="w-full h-10 bg-neutral-300 rounded-sm shadow-sm" />
					<Skeleton className="w-full h-10 bg-neutral-300 rounded-md shadow-sm" />
				</div>
			</div>
			<div className="w-full flex flex-col relative"></div>
		</aside>
	);
};
