import { Component } from "@/core";

class PopularList extends Component {
    template(): string {
        const {popularList} = this.$props;

        return `
            ${popularList?.length > 0 && (
                popularList.map((popular: any) => (
                    `<article style="display: block">
                        <div class="popular">
                            <span class="title">
                                ${popular.title}
                            </span>
                            <span class="writer">
                                ${popular.editor.name}
                            </span>
                        </div>
                    </article>
                    `
                )).join('')
            )}
        `;
        // if (popularList?.length > 0) {
        //     return popularList.map((popular: any) => (
        //         `
        //             <div class="popular">
        //                 <span class="popular_title">
        //                     ${popular.title}
        //                 </span>
        //                 <span class="popular_writer">
        //                     ${popular.editor.name}
        //                 </span>
        //             </div>
        //         `
        //     )).join('');
        // } else return ``
    }
}

export default PopularList;