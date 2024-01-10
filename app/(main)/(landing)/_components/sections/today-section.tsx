"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const TodaySection = () => {
	const router = useRouter();
	const onClick = () => {
		router.push("/today");
	};

	return (
		<section className="flex flex-col py-7 gap-y-10 items-center">
			<Link href="/today">
				<h1 className="lg:text-4xl md:text-3xl text-2xl text-center text-neutral-700 drop-shadow-md font-semibold hover:opacity-75 transition">
					Follow what&apos;s happening in Chess Today.{" "}
				</h1>
			</Link>

			<div className="grid md:grid-cols-2 grid-cols-1 w-full gap-x-10 gap-y-10 px-10 md:px-0">
				<div className="flex flex-col items-center md:pl-9 gap-y-5 group">
					<div className="relative w-full aspect-video group-hover:brightness-125 transition">
						<Image fill src="/chess-today-1.png" alt="Ad1" />
					</div>
					<p className="text-neutral-700 font-semibold text-center text-sm md:text-base px-5 group-hover:brightness-200 transition">
						Fantasy Sports Are Here: Magnus Carlsen&apos;s &apos;Chess
						Tropet&apos; Launches For Titled Cup 2024
					</p>
				</div>
				<div className="flex flex-col items-center md:pr-9 gap-y-5 group">
					<div className="relative w-full aspect-video group-hover:brightness-125 transition">
						<Image fill src="/chess-today-2.png" alt="Ad2" />
					</div>
					<p className="text-neutral-700 font-semibold text-center text-sm md:text-base px-5 group-hover:brightness-200 transition">
						Announcing The 2023 Chess.com Awards Winners
					</p>
				</div>
			</div>
			<button
				onClick={onClick}
				className="bg-emerald-300 rounded-md py-5 px-6 shadow-md hover:brightness-125 transition"
			>
				<span className="text-2xl drop-shadow-md font-medium text-white">
					Chess Today
				</span>
			</button>
		</section>
	);
};
