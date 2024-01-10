import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/use-sidebar";
import { LogIn, UserPlus } from "lucide-react";

export const AuthButtons = () => {
	const { isCollapsed } = useSidebar((state) => state);

	return (
		<div className="w-full flex flex-col gap-y-2 items-center py-2 overflow-hidden">
			<RegisterButton>
				{isCollapsed ? (
					<Button
						size="icon"
						className="rounded-sm shadow-sm"
						variant="secondary"
					>
						<UserPlus />
					</Button>
				) : (
					<Button
						className="rounded-sm shadow-sm w-40 flex bg-neutral-300 hover:bg-neutral-400 text-neutral-700 items-center gap-x-4 justify-start"
						variant="secondary"
					>
						<UserPlus />
						Sign Up
					</Button>
				)}
			</RegisterButton>
			<LoginButton mode="redirect">
				{isCollapsed ? (
					<Button
						size="icon"
						className="rounded-sm shadow-sm"
						variant="outline"
					>
						<LogIn />
					</Button>
				) : (
					<Button className="rounded-sm shadow-sm bg-emerald-300/50 hover:bg-emerald-400/50 text-neutral-700 w-40 flex items-center gap-x-4 justify-start">
						<LogIn />
						Log In
					</Button>
				)}
			</LoginButton>
		</div>
	);
};
