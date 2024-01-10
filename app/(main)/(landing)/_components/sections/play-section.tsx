"use client";

import { Computer, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const PlaySection = () => {
	const router = useRouter();
	const onRedirectOnline = () => {
		router.push("/play/online");
	};
	const onRedirectComputer = () => {
		router.push("/play/computer");
	};

	return (
		<section className="pl-10 pt-6 pb-16 flex items-center gap-x-10">
			<div
				onClick={onRedirectOnline}
				className="flex-1 hidden md:block relative aspect-square w-fit h-fit cursor-pointer hover:brightness-110 transition"
			>
				<Image
					src="/hero.png"
					alt="Hero"
					fill
					className="object-contain rounded-md"
				/>
			</div>

			<div className="flex-1 flex flex-col items-center px-10 pt-10 gap-y-5 lg:pr-36">
				<h1 className="xl:text-6xl text-5xl line-clamp-4 font-semibold text-neutral-700 text-center drop-shadow-lg">
					Play Chess Online on the #1 site!
				</h1>
				<div className="flex gap-x-14 text-neutral-250 text-lg font-light">
					<p className="text-center flex flex-col">
						<span className="font-semibold text-neutral-700">14,412,611</span>{" "}
						Games Today
					</p>
					<p className="text-center flex flex-col">
						<span className="font-semibold text-neutral-700">120,546</span>{" "}
						Playing Now
					</p>
				</div>
				<div className="flex flex-col gap-y-7 max-w-[400px]">
					<button
						onClick={onRedirectOnline}
						className="w-full bg-emerald-200 flex items-center shadow-lg rounded-md p-6 hover:brightness-125 transition ease-in-out hover:shadow-lg"
					>
						<PlayCircle className="h-12 w-12 font-light drop-shadow-md" />
						<div className="flex flex-col items-start ml-10">
							<h2 className="text-3xl font-semibold text-neutral-800 drop-shadow-md">
								Play Online
							</h2>
							<p className="text-xs line-clamp-1">
								Play with someone at your level
							</p>
						</div>
					</button>
					<button
						onClick={onRedirectComputer}
						className="w-full bg-neutral-300 flex items-center shadow-lg rounded-md p-6 hover:brightness-125 transition ease-in-out hover:shadow-lg"
					>
						<Computer className="h-12 w-12 font-light drop-shadow-md" />
						<div className="flex flex-col items-start ml-10">
							<h2 className="text-3xl font-semibold text-neutral-800 drop-shadow-md">
								Play Computer
							</h2>
							<p className="text-xs line-clamp-1">
								Play and customize training bost
							</p>
						</div>
					</button>
				</div>
			</div>
		</section>
	);
};
