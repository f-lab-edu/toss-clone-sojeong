import { Component } from "@/core";

class AtricleList extends Component {
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
                        <li>
                            <a>
                                <div class="article_content">
                                    <span class="title">${post.title}</span>
                                    <span class="subtitle">${post.subtitle}</span>
                                    <span class="editor">
                                    ${post.editor.name}
                                     · 
                                    ${getPublishedTime(post.publishedTime)}
                                    </span>
                                </div>
                                <div class="article_img">
                                <img srcset=${post.thumbnailConfig.imageUrl} alt="thumbnail"/>
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