import { useSidebar } from "@/hooks/use-sidebar";
import { XCircle } from "lucide-react";

export const CloseToggle = () => {
	const { onHide } = useSidebar((state) => state);

	const onClick = () => {
		onHide();
	};

	return (
		<button
			className="flex px-5 w-full py-2 justify-start items-center gap-x-2 hover:bg-rose-600/50 dark:bg-rose-600/50 dark:hover:bg-rose-400/50 bg-rose-400/50"
			onClick={onClick}
		>
			<XCircle className="h-5 w-5 text-rose-500" />
			<p className="font-normal text-sm text-rose-500 overflow-hidden">Close</p>
		</button>
	);
};
