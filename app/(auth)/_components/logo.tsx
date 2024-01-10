import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/">
			<Image
				src="/logos/chesscom_logo_dark.png"
				alt="Logo"
				width={200}
				height={50}
			/>
		</Link>
	);
};
