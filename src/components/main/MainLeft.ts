import { Component } from "@/core";
import Tab from "@/components/main/Tab";
import AtricleList from "../article/ArticleList";
import { getPosts } from "@/apis";

class MainLeft extends Component {
    setup(): void {
        this.$state = {
            postList: []
        };
    }

    mounted(): void {
        getPosts()
        .then(res => {
            this.setState({
                postList: res.resultData
            });
        });
    }
    
    template(): string {
        return `
            <div class="tab">
            </div>
            <div>
                <div class="article_list">
                </div>
            </div>
        `;
    }

    createComponent(): void {
        const $tab = document.querySelector('.tab');
        const $articleList = document.querySelector('.article_list');

        new Tab($tab, this.$props);
        new AtricleList($articleList, {postList: this.$state.postList});
    }

}

export default MainLeft;