import {Component, Type } from "@/core";
import { changeRoute } from "@/core/router";

class Nav extends Component {
    setEvent(): void {
        const $navbarLogo = document.querySelector('.navbar_logo');

        if ($navbarLogo) {
            $navbarLogo.addEventListener('click', this.handleClickLogo.bind(this));
        }
    }

    handleClickLogo(e: Event): void {
        changeRoute(null, '/');
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
                        <img src="/assets/toss_tech.png" alt="메인이동" height=45 width=140 />
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