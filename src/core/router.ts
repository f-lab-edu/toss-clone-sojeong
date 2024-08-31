export const getRoutes = (route: String): String | null => {
    let view = null;

    const routes = [
        {path: /^\/[|tech|design]?/, view: 'Main'},
        {path:/^\/article\/$/, view: 'Detail'}
    ];

    const matched = routes.find((_route: any) => route.match(_route.path));
    if (matched) {
        view = matched.view;
    }

    return view;
}