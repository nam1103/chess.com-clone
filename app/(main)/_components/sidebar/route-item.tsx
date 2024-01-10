import { useRouter } from "next/navigation";
import { Route } from ".";
import { useSidebar } from "@/hooks/use-sidebar";

interface RouteItemProps {
	route: Route;
}

export const RouteItem = ({ route }: RouteItemProps) => {
	const router = useRouter();
	const { isCollapsed } = useSidebar((state) => state);
	const { href, label, icon: Icon } = route;

	const onClick = () => {
		router.push(href);
	};

	return (
		<button
			onClick={onClick}
			className="text-neutral-600 dark:text-neutral-300 relative font-light w-full px-5 py-3.5 flex items-center justify-start gap-x-5 
			border-t border-t-neutral-200 dark:border-t-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-200 overflow-hidden"
		>
			<Icon className="h-6 w-6" />
			{!isCollapsed && <p className="font-medium">{label}</p>}
		</button>
	);
};
