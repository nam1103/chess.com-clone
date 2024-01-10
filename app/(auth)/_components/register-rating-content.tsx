import { RegisterContentProps } from "@/components/auth/register-form";
import { RegisterLevelSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RatingPicker } from "./rating-picker";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import * as z from "zod";
import { useEffect } from "react";
import { FormError } from "@/components/auth/form-error";
import { STEPS } from "@/hooks/use-register-step";

export const RegisterRatingContent = ({
	onSubmit,
	buttonLabel,
	values,
	error,
	isPending,
}: RegisterContentProps) => {
	const form = useForm<z.infer<typeof RegisterLevelSchema>>({
		resolver: zodResolver(RegisterLevelSchema),
		defaultValues: { startingRating: "400" },
	});

	const onChange = (value: "400" | "800" | "1200" | "1600") => {
		form.setValue("startingRating", value);
	};
	const rating = form.watch("startingRating");

	useEffect(() => {
		form.setValue("startingRating", values.startingRating as any);
	}, [form, values.startingRating]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit as any)}
				className="w-full space-y-8"
			>
				<div className="w-full space-y-5">
					<RatingPicker rating={rating} value="400" onChange={onChange} />
					<RatingPicker rating={rating} value="800" onChange={onChange} />
					<RatingPicker rating={rating} value="1200" onChange={onChange} />
					<RatingPicker rating={rating} value="1600" onChange={onChange} />
				</div>

				<input className="hidden" name="startingRating" />

				{error?.step === STEPS.LEVEL && <FormError message={error.msg} />}
				<Button
					disabled={isPending}
					className="w-full py-7 bg-emerald-400 hover:bg-emerald-400/80 text-xl font-semibold shadow-md"
				>
					{buttonLabel}
				</Button>
			</form>
		</Form>
	);
};
