import { cn } from "@/lib/utils";
import Image from "next/image";

interface RatingPickerProps {
	value: "400" | "800" | "1200" | "1600";
	rating: string;
	onChange: (value: "400" | "800" | "1200" | "1600") => void;
}

export const RatingPicker = ({
	value,
	rating,
	onChange,
}: RatingPickerProps) => {
	const isSelected = rating === value;
	const labelMap = {
		"400": "New to Chess",
		"800": "Beginner",
		"1200": "Intermediate",
		"1600": "Advanced",
	};

	const pieceImageUrlMap = {
		"400":
			"https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
		"800":
			"https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png",
		"1200":
			"https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png",
		"1600":
			"https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png",
	};

	const onClick = () => {
		onChange(value);
	};

	return (
		<div
			className={cn(
				"w-full select-none bg-neutral-500/80 p-4 px-8 rounded-sm shadow-md flex items-center justify-between hover:outline hover:outline-2 hover:outline-emerald-400",
				isSelected && "outline outline-2 outline-emerald-400"
			)}
			onClick={onClick}
		>
			<div>
				<p className="text-white font-semibold">{labelMap[value]}</p>
				{value === "400" && (
					<p className="text-xs font-semibold text-emerald-400">Most common</p>
				)}
			</div>
			<div className="relative h-10 w-10">
				<Image alt="" src={pieceImageUrlMap[value]} fill />
			</div>
		</div>
	);
};
