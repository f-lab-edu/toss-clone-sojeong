import {Component, Type } from "@/core";

class Nav extends Component {
    constructor($target: Element|null, $props?: any) {
        super($target, $props)
    }

    mounted(): void {
        
    }

    template(): string {
        const navContents = [
            'SLASH',
            'SIMPLICITY',
            '구독하기',
            '채용 바로가기'
        ];

        return `
            <div class="navbar_container">
                <div class="navbar_logo">
                    <a>
                        <img src="/assets/toss_tech.png" alt="메인이동" height=50 width=140 />
                    </a>
                </div>
                <div class="navbar_contents">
                    <ul>
                        ${navContents.map((content) => (
                            `<li><button>${content}</button></li>`
                        )).join('')}
                    </ul>
                </div>
            </div>
        `
    }
}

export default Nav;