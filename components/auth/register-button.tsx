"use client";

import { useRouter } from "next/navigation";

interface RegisterButtonProps {
	children: React.ReactNode;
	asChild?: boolean;
}

export const RegisterButton = ({ children }: RegisterButtonProps) => {
	const router = useRouter();

	const onClick = () => {
		router.push("/register");
	};

	return (
		<span className="cursor-pointer" onClick={onClick}>
			{children}
		</span>
	);
};
