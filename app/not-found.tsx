"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
	const router = useRouter();
	const onClick = () => {
		router.push("/");
	};

	return (
		<>
			<div className="bg-[#EBECED] opacity-60 h-full w-full items-center justify-center bg-[url('/background.png')] bg-contain bg-no-repeat bg-center" />
			<div className="flex justify-center items-center py-20 fixed inset-0 overflow-y-auto">
				<div className="bg-neutral-200/80 text-center h-fit py-10 px-20 rounded-xl flex flex-col items-center">
					<h1 className="text-4xl font-bold drop-shadow-md">
						404! Page Not Found
					</h1>
					<p className="text-muted-foreground mt-2">
						The page you are looking for does not exist.
					</p>
					<Button onClick={onClick} className="mt-5">
						Return Home
					</Button>
					<Separator className="bg-neutral-400 my-3" />
					<div className="aspect-square relative w-full">
						<Image src="/404.gif" alt="404" fill className="object-contain" />
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFoundPage;
