import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { useSidebar } from "@/hooks/use-sidebar";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

export const Search = () => {
	const { isCollapsed } = useSidebar((state) => state);
	const [isSearch, setIsSearch] = useState(false);
	const onClick = () => {
		setIsSearch((prev) => !prev);
	};

	return (
		<>
			<button
				onClick={onClick}
				className="text-neutral-600 dark:text-neutral-300 font-light w-full px-5 py-3.5 flex items-center justify-start gap-x-5 border-y border-neutral-200 dark:border-neutral-700  hover:bg-neutral-200 relative dark:hover:bg-neutral-800 overflow-hidden"
			>
				<SearchIcon className="h-6 w-6" />
				{!isCollapsed && <p className="font-medium">Search</p>}
			</button>
			<CommandDialog open={isSearch} onOpenChange={setIsSearch}>
				<CommandInput placeholder="Search for features." />
				<CommandList>
					<CommandGroup heading="Features"></CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
};
