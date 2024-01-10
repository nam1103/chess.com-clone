import { AuthButtons } from "./auth-buttons";
import { Logo } from "./logo";
import { SidebarToggle } from "./sidebar-toggle";

interface NavbarProps {
	isAuthenticated: boolean;
}

export const Navbar = ({ isAuthenticated }: NavbarProps) => {
	return (
		<nav
			style={{ transition: "height 0.5s" }}
			className="fixed overflow-hidden top-0 w-full h-14 md:h-0 z-[10] bg-neutral-50 dark:bg-neutral-950 flex items-center shadow-sm border-b px-5"
		>
			<SidebarToggle />
			<Logo />
			{!isAuthenticated && <AuthButtons />}
		</nav>
	);
};
