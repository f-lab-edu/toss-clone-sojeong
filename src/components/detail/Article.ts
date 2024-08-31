import { Component } from "@/core";

class Atricle extends Component {
    template(): string {
        const {post} = this.$props;

        return `
            ${post ? (
                `
                <header>
                    <img src=${post.coverConfig.imageUrl}>
                    <h1>
                        ${post.title}
                    </h1>
                    <div style="margin-top: 20px;">
                        ${post.seoConfig.tags?.length > 0 ? (
                            post.seoConfig.tags.map((tag: any) => (
                                `
                                <div>
                                    <a>
                                        #${tag.content}
                                    </a>
                                </div>
                                `
                            )).join('')
                        ) : (
                         ''
                        )}
                    </div>
                    <section>
                        <div>
                            <div class="writer">
                                <span class="name">
                                    ${post.editor.name}
                                </span>
                                <span class="desc">
                                    · 
                                    ${post.editor.shortDescription}
                                </span>
                            </div>
                            <div class="time">
                                ${post.publishedTime.substring(0, 10).replace('-', '년 ').replace('-', '월 ')}일
                            </div>
                        </div>
                    </section>
                </header>
                `
            ) : (
                ''
            )}

        `;
    }
}

export default Atricle