"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
	const { theme } = useTheme();
	const router = useRouter();
	const logo =
		theme === "dark"
			? "/logos/chesscom_logo_white.png"
			: "/logos/chesscom_logo_dark.png";
	const onClick = () => {
		router.push("/");
	};

	return (
		<button onClick={onClick} className="ml-5">
			<Image
				src={logo}
				width={110}
				height={20}
				className="object-contain"
				alt="Logo"
			/>
		</button>
	);
};
