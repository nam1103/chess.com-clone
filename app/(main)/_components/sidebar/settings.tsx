import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/hooks/use-sidebar";
import { LogOutIcon, Settings as SettingsIcon } from "lucide-react";
import { signOut } from "@/auth";
import { logout } from "@/actions/logout";

export const Settings = () => {
	const { isCollapsed } = useSidebar((state) => state);
	const onSignOut = async () => {
		await logout();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="outline-none">
				<button className="flex px-5 w-full py-2 justify-start items-center gap-x-2 hover:bg-neutral-200 dark:hover:bg-neutral-800">
					<SettingsIcon className="h-5 w-5 text-muted-foreground" />
					{!isCollapsed && (
						<p className="font-normal text-sm text-muted-foreground overflow-hidden">
							Settings
						</p>
					)}
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent side="right">
				<DropdownMenuItem>
					<SettingsIcon className="h-4 w-4 mr-4" />
					All Settings
				</DropdownMenuItem>
				<DropdownMenuItem onClick={onSignOut}>
					<LogOutIcon className="h-4 w-4 mr-4" />
					Log Out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
