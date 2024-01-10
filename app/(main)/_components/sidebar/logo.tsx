"use client";

import { useSidebar } from "@/hooks/use-sidebar";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
	const { isCollapsed } = useSidebar((state) => state);
	const { theme } = useTheme();
	const router = useRouter();

	const expandedLogo =
		theme === "dark"
			? "/logos/chesscom_logo_white.png"
			: "/logos/chesscom_logo_dark.png";

	const onClick = () => {
		router.push("/");
	};

	return (
		<button
			onClick={onClick}
			className="w-full h-fit relative flex items-center justify-center p-5 hover:bg-neutral-200 dark:hover:bg-neutral-800 overflow:hidden"
		>
			{isCollapsed ? (
				<Image
					src="/logos/chesscom_pawn.png"
					width={45}
					height={45}
					className=""
					alt="Logo"
				/>
			) : (
				<Image
					src={expandedLogo}
					width={150}
					height={20}
					className="object-contain"
					alt="Logo"
				/>
			)}
		</button>
	);
};
