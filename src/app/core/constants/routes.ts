export const PATH = {
	ROUTE_1: 'route-1',
	ROUTE_2: 'route-2',
	AUTH: 'auth',
	LOGOUT: 'logout',
}

export const ROUTES = [
	{
		label: 'RUTA 1',
		path: `/${PATH.ROUTE_1}`,
	},
	{
		label: 'RUTA 2',
		path: `/${PATH.ROUTE_2}`,
	},
	{
		label: 'Salir',
		path: `/${PATH.LOGOUT}`,
	},

];

export const PRIVATES_ROUTES = ROUTES.map((route) => route.path)