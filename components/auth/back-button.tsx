"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
	href: string;
	label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
	return (
		<Button
			variant="link"
			className="font-semibold w-full text-neutral-800"
			size="sm"
			asChild
		>
			<Link href={href} className="text-blue-500">
				{label}
			</Link>
		</Button>
	);
};
