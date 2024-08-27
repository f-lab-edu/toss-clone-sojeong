import { Component } from "@/core";
import Tab from "../Tab";
import AtricleList from "../article/ArticleList";
import { getPosts } from "@/apis";

class MainLeft extends Component {
    setup(): void {
        this.$state = {
            postList: []
        };
    }
    
    template(): string {
        return `
            <div class="tab">
            </div>
            <div class="article_list">
            </div>
        `;
    }

    mounted(): void {
        const $tab = document.querySelector('.tab');
        const $articleList = document.querySelector('.article_list');

        new Tab($tab, this.$props);
        new AtricleList($articleList, this.$props);

        getPosts()
        .then(res => {
            
            console.log({res})
        })
    }

}

export default MainLeft;