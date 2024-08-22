import { Component, Type } from "@/core";
import Nav from "@/components/Nav";
import Main from "@/pages/Main";
import Footer from "./components/Footer";
import "../public/css/style.css";


class App extends Component {
    // constructor($target: Element|null, $props?: any) {
    //     super($target, $props);
    // }

    template(): string {
        return `
            <nav class="navbar">
            </nav>
            <div class="main">
            </div>
            <footer class="footer">
            </footer>
        `;
    }

    mounted(): void {
        if (this.$target) {
            const $nav = this.$target.querySelector('.navbar');
            const $main = this.$target.querySelector('.main');
            const $footer = this.$target.querySelector('.footer');
           
            new Nav($nav);
            new Main($main);
            new Footer($footer);
        }
    }


}

export default App;