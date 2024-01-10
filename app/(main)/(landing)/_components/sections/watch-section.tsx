"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const WatchSection = () => {
	const router = useRouter();
	const onRedirectWatch = () => {
		router.push("/watch");
	};

	return (
		<section className="bg-neutral-200 flex p-10 gap-10 lg:gap-0 lg:flex-row lg:items-center flex-col-reverse">
			<div className="flex-1 flex flex-col">
				<div className="flex flex-col items-center gap-y-10">
					<h2 className="text-4xl hidden lg:block font-semibold text-neutral-700 drop-shadow-md text-center">
						Watch online games
					</h2>
					<button className="bg-emerald-300 rounded-md py-5 px-6 shadow-md hover:brightness-125 transition">
						<span className="text-2xl drop-shadow-md font-medium text-white">
							Watch Games
						</span>
					</button>
				</div>
				<div className="flex mt-10 gap-x-10 items-center">
					<div className="relative aspect-square w-60 lg:w-96 h-fit rounded-md overflow-hidden">
						<Image src="/hikaru-nakamura.jpg" alt="Hikaru" fill />
					</div>
					<div className="space-y-2">
						<p className="text-neutral-600 font-light italic">
							&quot;Watch chess streamers around the world will entertain you
							and improve pattern regconition, and no site does it better than
							chess.com.&quot;
						</p>
						<div className="space-x-2">
							<span className="bg-rose-600 rounded-sm px-1 font-bold text-sm text-neutral-100">
								GM
							</span>
							<span className="font-semibold text-neutral-800">
								Hikaru Nakamura
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-1 md:px-20 space-y-6">
				<h2 className="text-4xl block lg:hidden font-semibold text-neutral-700 drop-shadow-md text-center">
					Watch online games
				</h2>
				<div
					onClick={onRedirectWatch}
					className="h-full max-h-[500px] max-w-[500px] relative aspect-square mx-auto cursor-pointer hover:brightness-110 transition"
				>
					<Image
						fill
						src="/watch.png"
						alt="Watch"
						className="rounded-lg object-cover"
					/>
				</div>
			</div>
		</section>
	);
};
