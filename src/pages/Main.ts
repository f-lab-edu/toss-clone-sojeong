import { Component } from "@/core";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Detail from "./Detail";

class Main extends Component {
    constructor($target: Element|null, $props?: any) {
        super($target, $props);
    }

    template(): string {
        return `
            <div class="header">
            </div>
            <div class="detail">
            </div>
            <footer class="footer">
            </footer>
        `;
    }

    mounted(): void {
        if (this.$target) {
            const $header = this.$target.querySelector('header');
            const $detail = this.$target.querySelector('detail');
            const $footer = this.$target.querySelector('footer');
            
            new Header($header);
            new Detail($detail);
            new Footer($footer);
        }
    }
}

export default Main;