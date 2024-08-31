import { Component } from "@/core";
import Tab from "@/components/main/Tab";
import AtricleList from "@/components/main/ArticleList";

class MainLeft extends Component {
    setup(): void {
        const setInitialTabIdx = () => {
            const currentPath = window.location.pathname.replace('/', '');
            let tabIdx = 0;
            
            switch(currentPath) {
                case 'tech' :
                    tabIdx = 1;
                    break;
                case 'design':
                    tabIdx = 2;
                    break;
                default: 
                    break;
            }

            return tabIdx
        }

        this.$state = {
            tabIdx: setInitialTabIdx()
        };
    }

    setEvent(): void {
        
    }

    mounted(): void {

    }

    handleSetTabIdx(idx: Number): void {
        switch(idx) {
            case 1: 
                history.pushState(null, '', 'tech');
                break;
            case 2:
                history.pushState(null, '', 'design');
                break;
            default: 
                history.pushState(null, '', '');
        }

        this.setState({tabIdx: idx});
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

        if (tabIdx === 1) {
            filteredPostList = postList
            .filter((post: any) => (post.categories.find((category: any) => category.name === '개발')));
        }

        if (tabIdx === 2) {
            filteredPostList = postList
            .filter((post: any) => (post.categories.find((category: any) => category.name === '디자인')));
        }

        const $tab = document.querySelector('.tab');
        const $articleList = document.querySelector('.article_list');

        new Tab($tab, {tabIdx, onSetTabIdx: this.handleSetTabIdx.bind(this)});
        new AtricleList($articleList, {postList: filteredPostList});
    }

}

export default MainLeft;