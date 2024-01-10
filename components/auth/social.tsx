"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SocialProps {
	mode: "register" | "login";
}

export const Social = ({ mode }: SocialProps) => {
	const prefix = mode === "login" ? "Log In With" : "Continue With";
	const router = useRouter();

	return (
		<div className="w-full flex flex-col gap-2">
			<div className="flex items-center mb-5">
				<div className="flex-grow h-[1px] bg-muted-foreground" />
				<span className="text-muted-foreground px-5">OR</span>
				<div className="flex-grow h-[1px] bg-muted-foreground" />
			</div>

			<Button
				size="lg"
				className={cn(
					"w-full py-6 relative shadow-md hover:bg-black/80",
					mode === "register" && "py-7"
				)}
			>
				<FaGithub
					className={cn(
						"h-5 w-5 absolute left-10",
						mode === "register" && "h-6 w-6"
					)}
				/>
				<p className="">{prefix} Github</p>
			</Button>
			<Button
				size="lg"
				className={cn(
					"w-full py-6 relative bg-white hover:bg-white/80 shadow-md",
					mode === "register" && "py-7"
				)}
			>
				<FcGoogle
					className={cn(
						"h-5 w-5 absolute left-10",
						mode === "register" && "h-6 w-6"
					)}
				/>
				<p className="text-neutral-800">{prefix} Google</p>
			</Button>
			<Button
				size="lg"
				className={cn(
					"w-full py-6 relative bg-blue-500 hover:bg-blue-500/80 shadow-md",
					mode === "register" && "py-7"
				)}
			>
				<FaFacebook
					className={cn(
						"h-5 w-5 absolute left-10",
						mode === "register" && "h-6 w-6"
					)}
				/>
				<p>{prefix} Facebook</p>
			</Button>
			{mode === "register" && (
				<p
					className="text-center cursor-pointer select-none font-semibold text-lg mt-5"
					onClick={() => router.push("/")}
				>
					Play as guest
				</p>
			)}
		</div>
	);
};
