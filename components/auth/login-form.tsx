"use client";

import { useForm } from "react-hook-form";
import { LoginCardWrapper } from "./login-card-wrapper";
import * as z from "zod";
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [hidePassword, setHidePassword] = useState(true);

	const searchParams = useSearchParams();
	const toggleHidePassword = () => {
		setHidePassword((prev) => !prev);
	};

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			emailOrUsername: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof LoginSchema>) => {
		setError("");
		setSuccess("");
		startTransition(() => {
			login(values, searchParams.get("returnUrl") || undefined).then((data) => {
				setError(data.error || "");
				setSuccess(data.success || "");
			});
		});
	};

	return (
		<LoginCardWrapper
			headerLabel="Welcome back"
			backButtonHref="/register"
			backButtonLabel="New? Sign Up - and start playing chess!"
			showSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="emailOrUsername"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="relative">
											<User className="h-5 w-5 absolute top-1/2 left-4 text-muted-foreground -translate-y-1/2" />
											<Input
												{...field}
												placeholder="Email or Username"
												type="text"
												className="p-6 px-12 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-neutral-700"
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="relative">
											<Lock className="h-5 w-5 absolute top-1/2 left-4 text-muted-foreground -translate-y-1/2" />
											<Input
												{...field}
												placeholder="Password"
												type={hidePassword ? "password" : "text"}
												className="p-6 px-12 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-neutral-700"
											/>
											{hidePassword ? (
												<EyeOff
													onClick={toggleHidePassword}
													className="h-5 w-5 absolute top-1/2 right-4 text-muted-foreground -translate-y-1/2"
												/>
											) : (
												<Eye
													onClick={toggleHidePassword}
													className="h-5 w-5 absolute top-1/2 right-4 text-muted-foreground -translate-y-1/2"
												/>
											)}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error} />
					<FormSuccess message={success} />
					<Button
						disabled={isPending}
						type="submit"
						className="w-full py-6 shadow-md bg-emerald-400 hover:bg-emerald-500 text-lg font-semibold"
					>
						Log In
					</Button>
				</form>
			</Form>
		</LoginCardWrapper>
	);
};
