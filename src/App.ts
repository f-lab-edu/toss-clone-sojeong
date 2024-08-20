import { Component, Type } from "@/core";
import Nav from "@/components/Nav";
import Main from "@/pages/Main";
import "../public/css/style.css";


class App extends Component {
    constructor($target: Element|null, $props?: any) {
        super($target, $props);
    }

    template(): string {
        return `
            <nav class="navbar">
            </nav>
            <div class="main">
            </div>
        `;
    }

    mounted(): void {
        if (this.$target) {
            const $nav = this.$target.querySelector('.navbar');
            const $main = this.$target.querySelector('.main');
           
            new Nav($nav);
            new Main($main);
        }
    }


}

export default App;