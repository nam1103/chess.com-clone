"use client";

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { BackButton } from "./back-button";
import { Social } from "./social";

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}

export const LoginCardWrapper = ({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProps) => {
	return (
		<Card className="w-[450px] shadow-md bg-neutral-100/90 mb-10">
			<CardHeader>
				<CardTitle className="text-center">{headerLabel}</CardTitle>
			</CardHeader>
			<CardContent className="px-10">{children}</CardContent>
			{showSocial && (
				<CardFooter className="px-10">
					<Social mode="login" />
				</CardFooter>
			)}
			<CardFooter className="bg-neutral-200 py-3">
				<BackButton href={backButtonHref} label={backButtonLabel} />
			</CardFooter>
		</Card>
	);
};
