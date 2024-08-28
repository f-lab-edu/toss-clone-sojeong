import { Component } from "@/core";

class AtricleList extends Component {
    template(): string {
        return `
            <div style="width: 100, list-style: 'none'">
            ${this.$props?.postList?.length > 0 && (
                this.$props.postList.map((post: any) => {
                    `
                    <li>
                        <a>
                            <div class="article_content">
                            </div>
                            <div class="article_img>
                            </div>
                        </a>
                    </li>
                    `
                }).join("")
            )}
            </div>
        `;
    }
}

export default AtricleList