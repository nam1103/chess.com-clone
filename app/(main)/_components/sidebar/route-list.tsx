import { Route } from ".";
import { RouteItem } from "./route-item";

interface RouteListProps {
	routes: Route[];
}

export const RouteList = ({ routes }: RouteListProps) => {
	return (
		<>
			{routes.map((route) => (
				<RouteItem key={route.href} route={route} />
			))}
		</>
	);
};
