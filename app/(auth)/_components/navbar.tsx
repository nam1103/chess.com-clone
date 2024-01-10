"use client";

import { STEPS, useRegisterStep } from "@/hooks/use-register-step";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
	const { step, decStep } = useRegisterStep();

	const pathname = usePathname();

	return (
		<nav className="w-full grid grid-cols-3 py-10 px-5">
			<div className="flex md:justify-center items-center">
				{step !== STEPS.INITIAL && pathname === "/register" && (
					<Button variant="ghost" onClick={decStep}>
						<ArrowLeft className="h-7 w-7 hover:opacity-75" />
					</Button>
				)}
			</div>

			<div className="flex justify-center items-center">
				<Logo />
			</div>
			<div className="flex md:justify-center items-center justify-end">
				<Link
					className="text-lg font-semibold"
					href={pathname === "/register" ? "/login" : "/register"}
				>
					{pathname === "/register" ? "Log In" : "Sign Up"}
				</Link>
			</div>
		</nav>
	);
};
