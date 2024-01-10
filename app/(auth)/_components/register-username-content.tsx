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
import { RegisterUsernameSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const RegisterUsernameContent = ({
	onSubmit,
	buttonLabel,
	values,
	error,
	isPending,
}: RegisterContentProps) => {
	const form = useForm<z.infer<typeof RegisterUsernameSchema>>({
		resolver: zodResolver(RegisterUsernameSchema),
		defaultValues: {
			username: "",
		},
	});

	useEffect(() => {
		form.setValue("username", values.username);
	}, [form, values.username]);

	return (
		<Form {...form}>
			<form
				className="w-full flex flex-col gap-y-2"
				onSubmit={form.handleSubmit(onSubmit as any)}
			>
				<FormField
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									{...field}
									placeholder="Username"
									disabled={isPending}
									type="text"
									className="p-6 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-neutral-700"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{error?.step === STEPS.USERNAME && <FormError message={error.msg} />}
				<p className="mt-20 font-semibold text-xs">
					By signing up, I accept the site{" "}
					<Link href="/legal/user-aggrement" className="text-blue-300">
						Terms of service
					</Link>{" "}
					and aggre to the{" "}
					<Link href="/legal/privacy" className="text-blue-300">
						Private Policy
					</Link>
				</p>

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
