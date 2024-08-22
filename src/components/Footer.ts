import { Component } from "@/core";

class Footer extends Component {
    template(): string {
        return `
            <div>
                <a>홈페이지</a>
                <a>회사소개</a>
                <a>채용</a>
                <a>고객센터: 1599-4905 (24시간 연중무휴)</a>
            </div>
            <span>㈜비바리퍼블리카 Copyright © Viva Republica, Inc. All Rights Reserved.</span>
        `;
    }

    mounted(): void {
        
    }
}

export default Footer;