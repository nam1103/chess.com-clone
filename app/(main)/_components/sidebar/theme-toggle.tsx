import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSidebar } from "@/hooks/use-sidebar";

export const ThemeToggle = () => {
	const { setTheme, theme } = useTheme();
	const { isCollapsed } = useSidebar((state) => state);

	const onClick = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	const Icon = theme === "dark" ? Moon : Sun;
	const label = theme === "dark" ? "UI Dark" : "UI Light";

	return (
		<button
			className="flex px-5 w-full py-2 justify-start items-center gap-x-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
			onClick={onClick}
		>
			<Icon className="h-5 w-5 text-muted-foreground" />
			{!isCollapsed && (
				<p className="font-normal text-sm text-muted-foreground overflow-hidden line-clamp-1">
					{label}
				</p>
			)}
		</button>
	);
};
