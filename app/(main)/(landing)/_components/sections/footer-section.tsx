import Link from "next/link";
import {
	FaApple,
	FaDiscord,
	FaInstagram,
	FaTiktok,
	FaTwitch,
	FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsAndroid2 } from "react-icons/bs";
import { cn } from "@/lib/utils";

const footerRoutes = [
	{
		label: "Help",
		href: "/support",
	},
	{
		label: "Chess Terms",
		href: "/terms",
	},
	{
		label: "About",
		href: "/about",
	},
	{
		label: "Jobs",
		href: "/jobs",
	},
	{
		label: "Developers",
		href: "/club/chess-com-developer-community",
	},
	{
		label: "User Agreement",
		href: "/legal/user-agreement",
	},
	{
		label: "Privacy",
		href: "/legal/privacy",
	},
	{
		label: "Fair Play",
		href: "/legal/fair-play",
	},
	{
		label: "Community",
		href: "/legal/community",
	},
	{
		label: "Chess.com © 2024",
		href: "/",
	},
];
const opsRoutes = [
	{ icon: FaApple, href: "/placeholder" },
	{ icon: BsAndroid2, href: "/placeholder" },
];

const socialRoutes = [
	{
		icon: FaTiktok,
		href: "/placeholder",
		hover: "hover:fill-black",
	},
	{
		icon: FaXTwitter,
		href: "/placeholder",
		hover: "hover:fill-black",
	},
	{
		icon: FaYoutube,
		href: "/placeholder",
		hover: "hover:fill-rose-600",
	},
	{
		icon: FaTwitch,
		href: "/placeholder",
		hover: "hover:fill-indigo-700",
	},
	{
		icon: FaInstagram,
		href: "/placeholder",
		hover: "hover:fill-rose-700",
	},
	{
		icon: FaDiscord,
		href: "/placeholder",
		hover: "hover:fill-indigo-700",
	},
];

export const FooterSection = () => {
	return (
		<section className="flex flex-col gap-y-3 items-center py-5 px-5">
			<div className="flex gap-x-1 flex-wrap justify-center">
				{footerRoutes.map((route) => (
					<Link
						href={route.href}
						key={route.href}
						className="flex-shrink-0 flex gap-x-1 text-sm"
					>
						<p className="text-muted-foreground hover:opacity-50">
							{route.label}
						</p>
						{!(route.href === "/") && (
							<span className="text-muted-foreground">|</span>
						)}
					</Link>
				))}
			</div>
			<div className="flex gap-x-10">
				<div className="flex items-center gap-x-1">
					{opsRoutes.map((route) => {
						const { icon: Icon, href } = route;
						return (
							<Link href={href} key={href} className="hover:opacity-70">
								<Icon className="h-5 w-5 text-neutral-400" />
							</Link>
						);
					})}
				</div>
				<div className="flex gap-x-1">
					{socialRoutes.map((route) => {
						const { icon: Icon, href } = route;
						return (
							<Link href={href} key={href}>
								<Icon className={cn("h-5 w-5 text-neutral-400", route.hover)} />
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};
