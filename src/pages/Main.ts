import { Component } from "@/core";
import Tab from "@/components/Tab";
import AtricleList from "@/components/article/ArticleList";
import MainSide from "@/components/MainSide";

class Main extends Component {
    template(): string {
        return `
            <div class="tab">
            </div>
            <div class="article_list">
            </div>
            <div class="main_side">
            </div>
        `;
    }

    mounted(): void {
        if (this.$target) {
            const $tab = this.$target.querySelector('.tab');
            const $articleList = this.$target.querySelector('.article_list');
            const $mainSide = this.$target.querySelector('.main_side');
            
            new Tab($tab);
            new AtricleList($articleList);
            new MainSide($mainSide);
        }
    }
}

export default Main;