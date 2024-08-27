import { Component } from "@/core";

class AtricleList extends Component {
    constructor($target: Element|null, $props?: any) {
        super($target, $props);
    }

    template(): string {
        return `
            <div class="article-list">
            </div>
        `;
    }

    mounted(): void {
        
    }
}

export default AtricleList