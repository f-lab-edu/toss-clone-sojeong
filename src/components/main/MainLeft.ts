import { Component } from "@/core";
import Tab from "@/components/main/Tab";
import AtricleList from "../article/ArticleList";
import { getPosts } from "@/apis";

class MainLeft extends Component {
    setup(): void {
        this.$state = {
            tabIdx: 0
        };
    }

    setEvent(): void {
        
    }

    mounted(): void {
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
        const {postList} = this.$props;
        const {tabIdx} = this.$state;
        let filteredPostList = postList;

        const handleSetTabIdx = (idx: Number) => {
            console.log(idx)
            this.setState({tabIdx: idx});
        }

        if (tabIdx === 1) {
            filteredPostList = postList
            .filter((post: any) => (post.categories.find((category: any) => category.name === '개발')));
        }

        if (tabIdx === 2) {
            filteredPostList = postList
            .filter((post: any) => (post.categories.find((category: any) => category.name === '개발')));
        }

        const $tab = document.querySelector('.tab');
        const $articleList = document.querySelector('.article_list');

        new Tab($tab, {tabIdx, onSetTabIdx: handleSetTabIdx});
        new AtricleList($articleList, {postList: filteredPostList});
    }

}

export default MainLeft;