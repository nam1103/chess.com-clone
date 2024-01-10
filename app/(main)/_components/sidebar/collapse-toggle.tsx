import { useSidebar } from "@/hooks/use-sidebar";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

export const CollapseToggle = () => {
	const { isCollapsed, onCollapse, onExpand } = useSidebar((state) => state);

	const Icon = isCollapsed ? ArrowRightToLine : ArrowLeftToLine;
	const label = isCollapsed ? "Expand" : "Collapse";

	const onClick = () => {
		if (isCollapsed) {
			onExpand();
		} else {
			onCollapse();
		}

		console.log("clicked");
	};

	return (
		<button
			className="flex px-5 w-full py-2 justify-start items-center gap-x-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 relative overflow-hidden"
			onClick={onClick}
		>
			<Icon className="h-5 w-5 text-muted-foreground" />
			{!isCollapsed && (
				<p className="font-normal text-sm text-muted-foreground">{label}</p>
			)}
		</button>
	);
};
