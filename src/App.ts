import { Component } from "@/core";
import Nav from "@/components/Nav";
import Router from "./Router";
import Footer from "./components/Footer";
import "../public/css/style.css";


class App extends Component {
    template(): string {
        return `
            <nav class="navbar">
            </nav>
            <div class="contents">
            </div>
            <footer class="footer">
            </footer>
        `;
    }

    createComponent(): void {
        if (this.$target) {
            const $nav = this.$target.querySelector('.navbar');
            const $routeContents = this.$target.querySelector('.contents');
            const $footer = this.$target.querySelector('.footer');
           
            new Nav($nav);
            new Router($routeContents);
            new Footer($footer);
        }
    }
}

export default App;