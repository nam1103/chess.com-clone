import Credentials from "next-auth/providers/credentials";

import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schema";
import { getUserByEmail, getUserByUsername } from "./lib/user-service";
import bcrypt from "bcryptjs";

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials);

				if (!validatedFields.success) {
					return null;
				}

				const { emailOrUsername, password } = validatedFields.data;
				const isEmail =
					emailOrUsername.includes("@") && emailOrUsername.includes(".");

				let user;

				if (isEmail) {
					user = await getUserByEmail(emailOrUsername);
				} else {
					user = await getUserByUsername(emailOrUsername);
				}

				if (!user || !user.password) {
					return null;
				}

				const passwordsMatch = await bcrypt.compare(password, user.password);

				if (!passwordsMatch) {
					return null;
				}

				return user;
			},
		}),
	],
} satisfies NextAuthConfig;
