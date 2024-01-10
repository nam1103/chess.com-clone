interface HeaderProps {
	label: string;
}

export const Header = () => {
	return (
		<div className="w-full flex flex-col gap-y-4 items-center justify-center">
			<p>{label}</p>
		</div>
	);
};
