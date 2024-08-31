import { Component } from "@/core";

class RecentList extends Component {   
    template(): string {
        const {recentList} = this.$props;

        return `
            ${recentList?.length > 0 ? 
                (
                    recentList.map((recent: any) => (
                        `
                        <div href="/article/${recent.아티클id}" class="recent">
                            <div class="profile">
                                <div>
                                    <div>
                                        <img src="${recent.프로필이미지url}" aria-hidden="true">
                                    </div>
                                </div>
                                <span style="color: rgb(51, 61, 75); font-weight: 700; font-size: 13px">
                                    신나는고래
                                </span>
                            </div>
                            <div class="feedback">
                                <span>
                                    재미있네요...
                                </span>
                            </div>
                            <div class="article">
                                <span class="typography typography--xsmall typography--medium color--grey700 css-0 e1yiakpq1">
                                    Node.js 라이브러리 배포 파이프라인에 플러그인 시스템 도입기
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