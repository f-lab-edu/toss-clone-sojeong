import { Component } from "@/core";
import PopularList from "@/components/main/PopularList";
import RecentList from "@/components/main/RecentList";
import TagList from "@/components/main/TagList";


class MainRight extends Component {
    setup(): void {
        this.$state = {
            popularList: [],
            recentList: [],
            tagList: [],
        }    
    }

    mounted(): void {
        const {postList, liveList} = this.$props;

        let popularList: any[] = [];
        let recentList: any[] = [];
        let tagList: any[] = [];

        if (postList?.length > 0) {
            popularList = postList.filter((post: any) => (
                post.categories.find((category: any) => (
                    '인기글' === category.name
                ))
            ));

            tagList = [] 
            const tagCountMap = new Map()
            postList
                .map((post: any) => (post.seoConfig.tags))
                .forEach((tags: any[]) => {
                    tags.forEach((tag: any) => {
                        const _tag = tag.content;
                        const count = tagCountMap.get(_tag);

                        if (count) {
                            tagCountMap.set(_tag, count + 1)
                        } else {
                            tagCountMap.set(_tag, 1);
                        }
                    })
                });
            Array.from(tagCountMap)
                .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
                .forEach(([key, value]) => {
                    tagList.push(key);
                })
        }

        if (liveList?.length > 0) {
            recentList = liveList
                .filter((live: any) => live.댓글등록시간)
                .sort((a: any, b: any) => b.댓글등록시간 - a.댓글등록시간)
                .slice(0, 4);
        }

        this.setState({
            popularList,
            recentList,
            tagList
        });
    }

    template(): string {
        const templates = [
            {title: '인기있는 글', id: 'popular_list'},
            {title: '최근 댓글', id: 'recent_list'},
            {title: '태그', id: 'tag_list'}
        ]
        return `
           ${templates
                .map(({title, id}, idx) => (
                `            
                <div class="main_right_item" style="${idx > 0 ? 'margin-top: 24px' : ''}">
                    <span>
                    ${title}
                    </span>
                    <fragment id="${id}">
                    </fragment>
                </div>
                `
                ))
                .join("")
            }
        `;
    }

    createComponent(): void {
        const {popularList, recentList, tagList} = this.$state;
    
        const $popularList = document.querySelector('#popular_list');
        const $recentList = document.querySelector('#recent_list');
        const $tagList = document.querySelector('#tag_list');

        new PopularList($popularList, {popularList});
        new RecentList($recentList, {recentList});
        new TagList($tagList, {tagList});
    }
}

export default MainRight;