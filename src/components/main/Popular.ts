import { Component } from "@/core";

class Popular extends Component {
    // constructor($target: Element | null, $props : any) {
    //     super($target, $props);
    // }

    template(): string {
        console.log(this.$props)
        if (this.$props?.popular) {
            return `
                <div class="popular">
                    <span class="popular_title">
                        ${this.$props.popular.title}
                    </span>
                    <span class="popular_writer">
                        ${this.$props.popular.writer}
                    </span>
                </div>
            `;
        } else return ``
    }

    mounted(): void {

    }

}

export default Popular;