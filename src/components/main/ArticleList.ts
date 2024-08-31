import { Component } from "@/core";
import { changeRoute } from "@/core/router";

class AtricleList extends Component {
    setEvent(): void {
        this.$target?.addEventListener('click', this.handleClickArticle.bind(this))
    }

    handleClickArticle(e: Event): void {
        const target = e.target as HTMLDListElement;
        const articleId = target.getAttribute("key");
        
        if (articleId) {
            changeRoute(null, `article/${Number(articleId)}`);
        }
    }

    template(): string {
        return `
            <div style="width: 100, list-style: 'none'">
            ${this.$props?.postList?.length > 0 && (
                this.$props.postList.map((post: any) => {
                    const getPublishedTime = (publishedTime: string): string => {
                        const year = publishedTime.substring(0, 4);
                        const month = publishedTime.substring(5, 7);
                        const day = publishedTime.substring(8, 10);
                        return `${year}년 ${month}월 ${day}일`;
                    }

                    return (`
                        <li key=${post.id}>
                            <a key=${post.id}>
                                <div class="article_content" key=${post.id}>
                                    <span class="title" key=${post.id}>${post.title}</span>
                                    <span class="subtitle" key=${post.id}>${post.subtitle}</span>
                                    <span class="editor" key=${post.id}>
                                    ${post.editor.name}
                                     · 
                                    ${getPublishedTime(post.publishedTime)}
                                    </span>
                                </div>
                                <div class="article_img" key=${post.id}>
                                <img srcset=${post.thumbnailConfig.imageUrl} alt="thumbnail" key=${post.id}/>
                                </div>
                            </a>
                        </li>
                    `)}).join("")
            )}
            </div>
        `;
    }
}

export default AtricleList