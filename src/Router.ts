import { Component } from "./core";
import { getRoutes } from "./core/router";
import Main from "./pages/Main";

class Router extends Component {
    setEvent(): void {
        window.addEventListener('popstate', this.handleChangeRoute.bind(this));
    }

    handleChangeRoute(param: any): void {
      
    }

    createComponent(): void {
        if (this.$target) {
            const currentPath = window.location.pathname;
            const view = getRoutes(currentPath);

            switch(view) {
                case 'Main':
                    new Main(this.$target, this.$props);
                    break;
                case 'Detail':
                    new Main(this.$target, this.$props);
                    break;
                default:
                    new Main(this.$target, this.$props);
            }
        }


    }
}

export default Router;