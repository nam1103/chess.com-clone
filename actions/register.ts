"use server";

import { STEPS } from "@/hooks/use-register-step";
import { RegisterSchema } from "@/schema";
import * as z from "zod";
import bcrypt from "bcryptjs";
import {
	createUser,
	getUserByEmail,
	getUserByUsername,
} from "@/lib/user-service";
import { AuthError } from "next-auth";
import { DEFAULT_AUTHENTICATED_REDIRECT } from "@/routes";
import { signIn } from "@/auth";

export const register = async (
	values: z.infer<typeof RegisterSchema> | {},
	redirectTo?: string
) => {
	const validatedFields = RegisterSchema.safeParse(values);

	if (!validatedFields.success) {
		console.log("breaks");
		return { error: { step: STEPS.USERNAME, msg: "Invalid fields!" } };
	}

	const { email, password, username, startingRating } = validatedFields.data;

	const hashedPassword = await bcrypt.hash(password, 10);
	const existingEmailUser = await getUserByEmail(email);
	const parsedStartingRating = parseInt(startingRating);

	if (!!existingEmailUser) {
		return {
			error: {
				step: STEPS.AUTH,
				msg: "An account already exists with this email address.",
			},
		};
	}

	const existingUsernameUser = await getUserByUsername(username);

	if (!!existingUsernameUser) {
		return {
			error: {
				step: STEPS.USERNAME,
				msg: "That username is taken.",
			},
		};
	}

	await createUser({
		email,
		hashedPassword,
		username,
		startingRating: parsedStartingRating,
	});

	try {
		await signIn("credentials", {
			emailOrUsername: email,
			password,
			redirectTo: redirectTo || DEFAULT_AUTHENTICATED_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			return { step: STEPS.USERNAME, msg: "Something went wrong!" };
		}

		throw error;
	}

	return { success: { step: STEPS.USERNAME, msg: "Email sent!" } };
};
