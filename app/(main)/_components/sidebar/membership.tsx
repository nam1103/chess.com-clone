import { useSidebar } from "@/hooks/use-sidebar";
import { useRouter } from "next/navigation";
import { Gem } from "lucide-react";

export const Membership = () => {
	const { isCollapsed } = useSidebar((state) => state);
	const router = useRouter();

	const onClick = () => {
		router.push("/membership");
	};

	return (
		<button
			onClick={onClick}
			className="text-sky-600 dark:text-sky-400 font-light w-full px-5 py-3.5 flex items-center justify-start gap-x-5 border-t dark:border-t-neutral-700 border-t-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 relative overflow-hidden"
		>
			<Gem className="h-6 w-6" />
			{!isCollapsed && <p className="font-medium">Upgrade</p>}
		</button>
	);
};
