import {Component, Type } from "../core";

class Nav extends Component {
    constructor($target: HTMLElement, $props: any) {
        super($target, $props)
    }

    mounted(): void {
        
    }

    template(): string {
        return `
            <nav class="navbar">
                <div style="background-image: url('../public/assets/toss_tech.png')">
                    <div>
                        <div>
                        </div>
                         toss-tech
                        <div>
                        </div>
                    </div>
                </div>
            </nav>
        `
    }
}

export default Nav;