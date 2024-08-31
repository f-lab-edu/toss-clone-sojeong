import { Component } from "@/core";
import { changeRoute } from "@/core/router";

class PopularList extends Component {
    setEvent(): void {
        if(this.$target) {
            this.$target.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                const $article = target.closest('.popular_article');
                const articleId = $article?.getAttribute('key');

                if (articleId) {
                    changeRoute(null, `article/${articleId}`);
                }
            })
        }
    }

    template(): string {
        const {popularList} = this.$props;

        return `
            ${popularList?.length > 0 && (
                popularList.map((popular: any) => (
                    `<article class='popular_article' style="display: block" key=${popular.id}>
                        <div class="popular">
                            <span class="title">
                                ${popular.title}
                            </span>
                            <span class="writer">
                                ${popular.editor.name}
                            </span>
                        </div>
                    </article>
                    `
                )).join('')
            )}
        `;
        // if (popularList?.length > 0) {
        //     return popularList.map((popular: any) => (
        //         `
        //             <div class="popular">
        //                 <span class="popular_title">
        //                     ${popular.title}
        //                 </span>
        //                 <span class="popular_writer">
        //                     ${popular.editor.name}
        //                 </span>
        //             </div>
        //         `
        //     )).join('');
        // } else return ``
    }
}

export default PopularList;