import { ReactNode } from "react";
import { Navbar } from "../_components/navbar";
import { Sidebar } from "../_components/sidebar";
import { Container } from "@/app/(main)/_components/container";
import { auth } from "@/auth";

interface LandingLayoutProps {
	children: ReactNode;
}

const LandingLayout = async ({ children }: LandingLayoutProps) => {
	const isAuthenticated = !!(await auth());

	return (
		<div className="h-full">
			<Navbar isAuthenticated={isAuthenticated} />
			<main className="h-full pt-14 md:pt-0">
				<Sidebar isAuthenticated={isAuthenticated} />
				<Container>{children}</Container>
			</main>
		</div>
	);
};

export default LandingLayout;
