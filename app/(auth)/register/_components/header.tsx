interface HeaderProps {
	heading: string;
	subHeading?: string;
}

export const Header = ({ heading, subHeading }: HeaderProps) => {
	return (
		<div className="text-center space-y-5 pb-5">
			<h1 className="text-4xl text-neutral-700 font-semibold drop-shadow-md">
				{heading}
			</h1>
			{!!subHeading && (
				<h2 className="text-lg font-semibold text-muted-foreground">
					{subHeading}
				</h2>
			)}
		</div>
	);
};
