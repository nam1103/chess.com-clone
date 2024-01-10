import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
	return (
		<div className="ml-auto space-x-4">
			<RegisterButton>
				<Button variant="secondary" size="sm">
					Sign Up
				</Button>
			</RegisterButton>
			<LoginButton mode="redirect">
				<Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
					Log In
				</Button>
			</LoginButton>
		</div>
	);
};
