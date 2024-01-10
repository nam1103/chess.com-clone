import { ReactNode } from "react";
import { Navbar } from "../_components/navbar";
import { Sidebar } from "../_components/sidebar";
import { Container } from "@/app/(main)/_components/container";
import { auth } from "@/auth";
import { ThemeProvider } from "./_components/providers/theme-provider";

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout = async ({ children }: MainLayoutProps) => {
	const isAuthenticated = !!(await auth());

	return (
		<div className="h-full">
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				storageKey="theme:chess.com"
				disableTransitionOnChange
			>
				<Navbar isAuthenticated={isAuthenticated} />
				<main className="h-full pt-14 md:pt-0">
					<Sidebar isAuthenticated={isAuthenticated} />
					<Container>{children}</Container>
				</main>
			</ThemeProvider>
		</div>
	);
};

export default MainLayout;
