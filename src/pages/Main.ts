import { Component } from "@/core";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AtricleList from "@/components/article/ArticleList";

class Main extends Component {
    constructor($target: Element|null, $props?: any) {
        super($target, $props);
    }

    template(): string {
        return `
            <div class="header">
            </div>
            <div class="article-list">
            </div>
            <footer class="footer">
            </footer>
        `;
    }

    mounted(): void {
        if (this.$target) {
            const $header = this.$target.querySelector('header');
            const $articleList = this.$target.querySelector('article-list');
            const $footer = this.$target.querySelector('footer');
            
            new Header($header);
            new AtricleList($articleList);
            new Footer($footer);
        }
    }
}

export default Main;