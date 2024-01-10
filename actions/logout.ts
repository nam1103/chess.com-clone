"use server";

import { signOut } from "@/auth";
import { DEFAULT_LOGOUT_REDIRECT } from "@/routes";

export const logout = async (redirectTo?: string) => {
	await signOut({ redirectTo: redirectTo || DEFAULT_LOGOUT_REDIRECT });
};
