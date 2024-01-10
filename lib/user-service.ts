import { db } from "./db";

export const getUserByUsername = async (username: string) => {
	const user = await db.user.findUnique({
		where: {
			username,
		},
	});

	return user;
};

export const getUserByEmail = async (email: string) => {
	const user = await db.user.findUnique({
		where: {
			email,
		},
	});

	return user;
};

export const getUserById = async (id: string) => {
	const user = await db.user.findUnique({
		where: { id },
	});

	return user;
};

export const createUser = async ({
	email,
	hashedPassword,
	username,
	startingRating,
}: {
	email: string;
	hashedPassword: string;
	username: string;
	startingRating: number;
}) => {
	const user = await db.user.create({
		data: {
			email,
			password: hashedPassword,
			username,
			rating: startingRating,
		},
	});

	return user;
};

export const updateUser = async () => {};
