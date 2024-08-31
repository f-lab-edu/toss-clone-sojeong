export const changeRoute = (data: Object | null, url: String) => {
    window.dispatchEvent(new CustomEvent('changeroute', {
        detail: {data, url}
    }))
};

export const getRouteView = (route: string): String | null => {
    let view = null;

    const routes = [
        {path: /^\/$/, view: 'Main'},
        {path: /^\/[tech|design]/, view: 'Main'},
        {path: /^\/article\/[\w]+$/, view: 'Detail'},
    ];

    const matched = routes.find((_route: any) => new RegExp(_route.path).exec(route));
    if (matched) {
        view = matched.view;
    }

    return view;
}