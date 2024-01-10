import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/hooks/use-sidebar";
import {
	Bug,
	CreditCard,
	HelpCircle,
	Lightbulb,
	MinusCircle,
} from "lucide-react";

export const Help = () => {
	const onClick = () => {};
	const { isCollapsed } = useSidebar((state) => state);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="outline-none">
				<button
					className="flex px-5 w-full py-2 justify-start items-center gap-x-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
					onClick={onClick}
				>
					<HelpCircle className="h-5 w-5 text-muted-foreground" />
					{!isCollapsed && (
						<p className="font-normal text-sm text-muted-foreground">Help</p>
					)}
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				side="left"
				className="dark:bg-neutral-950 bg-neutral-50"
			>
				<DropdownMenuLabel>Help / Feedback</DropdownMenuLabel>
				<DropdownMenuItem>
					<HelpCircle className="h-4 w-4 mr-4" />
					Ask a question
				</DropdownMenuItem>
				<DropdownMenuItem>
					<MinusCircle className="h-4 w-4 mr-4" />
					Report Abuse
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Lightbulb className="h-4 w-4 mr-4" />
					Make a Suggestion
				</DropdownMenuItem>
				<DropdownMenuItem>
					<CreditCard className="h-4 w-4 mr-4" />
					Billing Issues
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Bug className="h-4 w-4 mr-4" />
					Report a Bug
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
