import {
	CommandDialog,
	CommandGroup,
	CommandInput,
	CommandList,
} from "@/components/ui/command";
import { useSidebar } from "@/hooks/use-sidebar";
import { Globe2 } from "lucide-react";
import { useState } from "react";

export const Language = () => {
	const { isCollapsed } = useSidebar((state) => state);
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<button
				className="flex px-5 w-full py-2 justify-start items-center gap-x-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
				onClick={onClick}
			>
				<Globe2 className="h-5 w-5 text-muted-foreground" />
				{!isCollapsed && (
					<p className="font-normal text-sm text-muted-foreground overflow-hidden">
						English
					</p>
				)}
			</button>
			<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
				<CommandInput placeholder="Search for languages." />
				<CommandList>
					<CommandGroup heading="Languages"></CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};
