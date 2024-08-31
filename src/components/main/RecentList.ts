import { Component } from "@/core";
import { changeRoute } from "@/core/router";

class RecentList extends Component {   
    setEvent(): void {
        if (this.$target) {
            this.$target.addEventListener('click', (e) => {
                const target = e.target as HTMLElement;
                const $recent = target?.closest('.recent');
                const articleId = $recent?.getAttribute('key');

                if (articleId) {
                    changeRoute(null, `article/${articleId}`);
                }
            });
        }
    }   

    template(): string {
        const {recentList} = this.$props;

        return `
            ${recentList?.length > 0 ? 
                (
                    recentList.map((recent: any) => (
                        `
                        <div class="recent" key=${recent.아티클id}>
                            <div class="profile">
                                <div>
                                    <div>
                                        <img src="${recent.프로필이미지url}" aria-hidden="true">
                                    </div>
                                </div>
                                <span style="color: rgb(51, 61, 75); font-weight: 700; font-size: 13px">
                                    ${recent.작성자}
                                </span>
                            </div>
                            <div class="feedback">
                                <span>
                                    ${recent.댓글}
                                </span>
                            </div>
                            <div class="article">
                                <span class="typography typography--xsmall typography--medium color--grey700 css-0 e1yiakpq1">
                                    ${recent.아티클제목}
                                </span>
                            </div>
                        </div>
                        `
                    )).join('')
                ) : ''
            }
        `;
    }
}

export default RecentList;