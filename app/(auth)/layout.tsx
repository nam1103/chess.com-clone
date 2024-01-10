import { Navbar } from "./_components/navbar";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<>
			<div className="bg-[#EBECED] opacity-60 h-full w-full items-center justify-center bg-[url('/background.png')] bg-contain bg-no-repeat bg-center" />
			<div className="flex flex-col items-center fixed inset-0 overflow-y-auto">
				<Navbar />
				{children}
			</div>
		</>
	);
};

export default AuthLayout;
