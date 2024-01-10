"use client";

import { useMemo } from "react";
import { Header } from "./_components/header";
import { RegisterForm } from "@/components/auth/register-form";
import { Social } from "@/components/auth/social";
import { STEPS, useRegisterStep } from "@/hooks/use-register-step";

const RegisterPage = () => {
	const { step } = useRegisterStep((state) => state);

	const heading = useMemo(() => {
		if (step === STEPS.INITIAL) {
			return "Create your Chess.com account";
		}

		if (step === STEPS.LEVEL) {
			return "What is your chess skill level?";
		}
		if (step === STEPS.AUTH) {
			return "Enter your email and a password";
		}

		return "Choose a username";
	}, [step]);
	const subHeading = useMemo(() => {
		if (step === STEPS.INITIAL) {
			return "";
		}

		if (step === STEPS.LEVEL) {
			return "A starting point for match pairings";
		}

		if (step === STEPS.AUTH) {
			return "This allows you to log in on any device";
		}

		return "This is what your friends and other players will see when you play";
	}, [step]);

	return (
		<div className="sm:w-[450px] w-[350px] flex flex-col items-center gap-y-5 pb-10">
			<Header heading={heading} subHeading={subHeading} />
			<RegisterForm />
			{step === STEPS.INITIAL && <Social mode="register" />}
		</div>
	);
};

export default RegisterPage;
