"use server";

import { signIn } from "@/auth";
import { DEFAULT_AUTHENTICATED_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (
	values: z.infer<typeof LoginSchema>,
	redirectTo?: string
) => {
	const validatedFields = LoginSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid fields!" };
	}

	const { emailOrUsername, password } = validatedFields.data;

	try {
		await signIn("credentials", {
			emailOrUsername,
			password,
			redirectTo: redirectTo || DEFAULT_AUTHENTICATED_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: "Invalid credentials" };
				default:
					return { error: "Something went wrong!" };
			}
		}

		throw error;
	}
};
