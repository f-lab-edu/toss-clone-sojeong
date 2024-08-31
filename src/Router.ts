import { Component } from "./core";
import { getRouteView } from "./core/router";
import Detail from "./pages/Detail";
import Main from "./pages/Main";



class Router extends Component {
    setEvent(): void {
        window.addEventListener('changeroute', this.handleChangeRoute.bind(this));
        window.addEventListener('popstate', (e) => {
            this.render();
        });
    }

    handleChangeRoute(e: any): void {
      const {data, url} = e.detail;
      history.pushState(null, '', `${url}`);
      this.render();
    }

    createComponent(): void {
        if (this.$target) {
            const currentPath = window.location.pathname;
            const view = getRouteView(currentPath);

            switch(view) {
                case 'Main':
                    new Main(this.$target, this.$props);
                    break;
                case 'Detail':
                    new Detail(this.$target, this.$props);
                    break;
                default:
                    new Main(this.$target, this.$props);
            }
        }


    }
}

export default Router;