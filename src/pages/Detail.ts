import { Component } from "@/core";
import { getPost } from "@/apis";
import Atricle from "@/components/detail/Article";
import Comments from "@/components/detail/Comments";

class Detail extends Component {
    setup() {
        this.$state = {
            post: null
        };
    }

    mounted(): void {
        const articleId = window.location.pathname.replace('/article/', '');

        if (articleId) {
            getPost({id: articleId})
            .then((res: any) => {
                this.setState({post: res.resultData});
            })
        }
    }

    template(): string {
        return `
            <div class="detail">
                <article class="detail_article">
                </article>
                <div class="comments">
                </div>
            </div>
        `;
    }

    createComponent(): void {
        const {post} = this.$state;

        if (this.$target) {
            const $article = this.$target.querySelector('.detail_article');
            const $comments = this.$target.querySelector('.comments');
    
            new Atricle($article, {post});
            new Comments($comments, this.$props);
        }
    }
}

export default Detail;