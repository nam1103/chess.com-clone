import { STEPS, useRegisterStep } from "@/hooks/use-register-step";
import { useEffect, useMemo, useState, useTransition } from "react";

import * as z from "zod";
import { RegisterSchema } from "@/schema";

import { register } from "@/actions/register";
import { RegisterInitialContent } from "@/app/(auth)/_components/register-initial-content";
import { RegisterRatingContent } from "@/app/(auth)/_components/register-rating-content";
import { RegisterAuthContent } from "@/app/(auth)/_components/register-auth-content";
import { RegisterUsernameContent } from "@/app/(auth)/_components/register-username-content";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";

export interface RegisterContentProps {
	buttonLabel: string;
	isPending: boolean;
	values: {
		startingRating: string;
		email: string;
		password: string;
		username: string;
	};
	error: { step: STEPS; msg: string } | null;
	onSubmit: (values: z.infer<typeof RegisterSchema> | null) => void;
}

export const RegisterForm = () => {
	const { step, incStep, resetStep, setStep } = useRegisterStep(
		(state) => state
	);
	const form = useForm({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			startingRating: "400",
			email: "",
			password: "",
			username: "",
		},
	});

	const [isPending, startTransition] = useTransition();
	const [success, setSuccess] = useState<{ step: STEPS; msg: string } | null>(
		null
	);
	const [error, setError] = useState<{ step: STEPS; msg: string } | null>(null);
	const searchParams = useSearchParams();

	const buttonLabel = useMemo(() => {
		if (step === STEPS.INITIAL) {
			return "Sign Up";
		}

		return "Continue";
	}, [step]);

	const onSubmit = (values: z.infer<typeof RegisterSchema> | null) => {
		if (values?.username) {
			form.setValue("username", values.username);
		}
		if (values?.password) {
			form.setValue("password", values.password);
		}
		if (values?.email) {
			form.setValue("email", values.email);
		}
		if (values?.startingRating) {
			form.setValue("startingRating", values.startingRating);
		}
		setError(null);
		setSuccess(null);

		if (step === STEPS.USERNAME) {
			startTransition(() => {
				register(
					form.getValues(),
					searchParams.get("returnUrl") || undefined
				).then((data) => {
					if (data.error) {
						setStep(data.error.step);
						setError(data.error);
					}
					setSuccess(data?.success || null);
				});
			});
		}

		incStep();
	};

	const values = form.getValues();

	const content = useMemo(() => {
		if (step === STEPS.INITIAL) {
			return (
				<RegisterInitialContent
					isPending={isPending}
					error={error}
					values={values}
					onSubmit={onSubmit}
					buttonLabel={buttonLabel}
				/>
			);
		}

		if (step === STEPS.LEVEL) {
			return (
				<RegisterRatingContent
					isPending={isPending}
					error={error}
					values={values}
					onSubmit={onSubmit}
					buttonLabel={buttonLabel}
				/>
			);
		}

		if (step === STEPS.AUTH) {
			return (
				<RegisterAuthContent
					isPending={isPending}
					error={error}
					values={values}
					onSubmit={onSubmit}
					buttonLabel={buttonLabel}
				/>
			);
		}

		if (step === STEPS.USERNAME) {
			return (
				<RegisterUsernameContent
					isPending={isPending}
					error={error}
					values={values}
					onSubmit={onSubmit}
					buttonLabel={buttonLabel}
				/>
			);
		}
	}, [step, error, isPending, buttonLabel, onSubmit, values]);

	useEffect(() => {
		resetStep();
	}, [resetStep]);

	return content;
};
