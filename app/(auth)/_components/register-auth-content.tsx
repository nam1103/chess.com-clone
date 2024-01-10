import { FormError } from "@/components/auth/form-error";
import { RegisterContentProps } from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { STEPS } from "@/hooks/use-register-step";
import { RegisterAuthSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const RegisterAuthContent = ({
	onSubmit,
	buttonLabel,
	values,
	error,
	isPending,
}: RegisterContentProps) => {
	const form = useForm<z.infer<typeof RegisterAuthSchema>>({
		resolver: zodResolver(RegisterAuthSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const [hidePassword, setHidePassword] = useState(true);
	const toggleHidePassword = () => {
		setHidePassword((prev) => !prev);
	};

	useEffect(() => {
		form.setValue("email", values.email);
		form.setValue("password", values.password);
	}, [form, values.email, values.password]);

	return (
		<Form {...form}>
			<form
				className="w-full flex flex-col gap-y-2"
				onSubmit={form.handleSubmit(onSubmit as any)}
			>
				<FormField
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div className="relative">
									<Mail className="h-5 w-5 absolute top-1/2 left-4 text-muted-foreground -translate-y-1/2" />
									<Input
										{...field}
										disabled={isPending}
										placeholder="Email"
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
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<div className="relative">
									<Lock className="h-5 w-5 absolute top-1/2 left-4 text-muted-foreground -translate-y-1/2" />
									<Input
										{...field}
										disabled={isPending}
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
				{error?.step === STEPS.AUTH && <FormError message={error.msg} />}
				<Button
					disabled={isPending}
					className="mt-5 w-full py-7 bg-emerald-400 hover:bg-emerald-400/80 text-xl font-semibold shadow-md"
				>
					{buttonLabel}
				</Button>
			</form>
		</Form>
	);
};
