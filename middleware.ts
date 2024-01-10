import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
	DEFAULT_UNAUTHENTICATED_REDIRECT,
	DEFAULT_AUTHENTICATED_REDIRECT,
	authenticatedOnlyRoutesPrefixes,
	unauthenticatedOnlyRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isAuthenticated = !!req.auth;
	const isUnauthenticatedOnlyRoute = unauthenticatedOnlyRoutes.includes(
		nextUrl.pathname
	);

	const isAuthenticatedOnlyRoute = authenticatedOnlyRoutesPrefixes.some(
		(prefix) => nextUrl.pathname.startsWith(prefix)
	);

	if (isUnauthenticatedOnlyRoute && isAuthenticated) {
		return Response.redirect(new URL(DEFAULT_AUTHENTICATED_REDIRECT, nextUrl));
	}

	if (isAuthenticatedOnlyRoute && !isAuthenticated) {
		return Response.redirect(
			new URL(DEFAULT_UNAUTHENTICATED_REDIRECT, nextUrl)
		);
	}

	return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
