import { RegisterContentProps } from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const RegisterInitialContent = ({
	onSubmit,
	buttonLabel,
}: RegisterContentProps) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(null);
			}}
			className="w-full"
		>
			<div className="px-32 w-full">
				<div className="relative w-full aspect-square">
					<Image
						src="/pawn-on-board.svg"
						fill
						className="object-cover"
						alt="Hero"
					/>
				</div>
			</div>

			<Button className="w-full py-7 bg-emerald-400 hover:bg-emerald-400/80 text-xl font-semibold shadow-md">
				{buttonLabel}
			</Button>
		</form>
	);
};
