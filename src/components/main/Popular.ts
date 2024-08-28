import { Component } from "@/core";

class Popular extends Component {
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
}

export default Popular;