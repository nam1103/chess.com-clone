import * as z from "zod";

export const LoginSchema = z.object({
	emailOrUsername: z.string().min(1, { message: "This field is required" }),
	password: z.string().min(1, { message: "This field is required" }),
});

export const RegisterSchema = z.object({
	startingRating: z.enum(["400", "800", "1200", "1600"]),
	username: z
		.string()
		.min(3, { message: "Username must be at least 3 characters long" })
		.max(25, { message: "Username must be at most 25 characters long" })
		.refine((value) => /^[a-zA-Z0-9]+$/.test(value), {
			message: "Username must use only Latin letters and numbers",
		}),
	email: z.string().email({ message: "This is not a valid email format" }),
	password: z
		.string()
		.min(1, { message: "This field is required" })
		.refine(
			(value) => {
				// Check if the password has at least 8 characters, one capital letter, and one number
				return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
			},
			{
				message:
					"Password should have at least 8 characters, one capital letter, and one number",
			}
		),
});

export const RegisterLevelSchema = z.object({
	startingRating: z.enum(["400", "800", "1200", "1600"]),
});

export const RegisterAuthSchema = z.object({
	email: z.string().email({ message: "This is not a valid email format" }),
	password: z
		.string()
		.min(1, { message: "This field is required" })
		.refine(
			(value) => {
				// Check if the password has at least 8 characters, one capital letter, and one number
				return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
			},
			{
				message:
					"Password should have at least 8 characters, one capital letter, and one number",
			}
		),
});

export const RegisterUsernameSchema = z.object({
	username: z
		.string()
		.min(3, { message: "Username must be at least 3 characters long" })
		.max(25, { message: "Username must be at most 25 characters long" })
		.refine((value) => /^[a-zA-Z0-9]+$/.test(value), {
			message: "Username must use only Latin letters and numbers",
		}),
});
