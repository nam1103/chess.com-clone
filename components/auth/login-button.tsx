"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
	children: React.ReactNode;
	asChild?: boolean;
	mode: "modal" | "redirect";
}

export const LoginButton = ({ asChild, mode, children }: LoginButtonProps) => {
	const router = useRouter();

	const onClick = () => {
		router.push("/login");
	};

	if (mode === "modal") return <div>modal</div>;

	return (
		<span className="cursor-pointer" onClick={onClick}>
			{children}
		</span>
	);
};
