import { Component } from "@/core";
import PopularList from "./Popular";
import RecentList from "./Recent";
import TagList from "./Tag";
import Popular from "./Popular";
import Recent from "./Recent";
import Tag from "./Tag";

class MainRight extends Component {
    setup(): void {
        this.$state = {
            popularList: [{title: 'title', wreiter: 'writer'}]
        }    
    }

    template(): string {
        const templates = [
            {title: '인기있는 글', template: '<article class="popular-list"></article>'},
            {title: '최근 댓글', template: '<div class="recent-list"></div>'},
            {title: '태그', template: '<div class="tag-list"></div>'}
        ]
        return `
           ${templates
                .map(({title, template}) => (
                `            
                <div class="main_right_item">
                    <span>
                    ${title}
                    </span>
                    ${this.$state.popularList
                        .map((popular: any) => (
                            `
                            <article>

                            </article>
                            `
                        ))
                    }
                </div>
                `
                ))
                .join("")
            }
        `;
    }

    createComponent(): void {
        const $popularList = document.querySelectorAll('article');
        const $recent = document.querySelector('.recent');
        const $tag = document.querySelector('.tag');
        console.log($popularList)
       for (let i = 0; i < $popularList.length; i++) {
            new Popular($popularList[i], {popular: this.$state.popularList[i]});
       }
        
        // new Recent($recent);
        // new Tag($tag);
    }
}

export default MainRight;