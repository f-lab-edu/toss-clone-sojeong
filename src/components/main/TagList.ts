import { Component } from "@/core";

class TagList extends Component {
    mounted(): void {

    }
    
    template(): string {
        const {tagList} = this.$props;

        return `
        <div class="tag">
        ${tagList?.length > 0 ? 
            (tagList.map((tag: any) => (
                `
                <div>
                    <span>
                    ${tag}
                    </span>
                </div>
                `
            )).join('')) : ('')
        }
        </div>
        `;
    }



}

export default TagList;