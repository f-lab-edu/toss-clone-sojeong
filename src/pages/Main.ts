import { Component } from "@/core";
import MainContainer from "@/components/main/MainContainer";


class Main extends Component {
    template(): string {
        return `
            <div class="main">
                <div>
                    <div class="toss_banner">
                        <span>
                            <img
                                src="/assets/toss_banner.png"
                            />

                        </span>
                    </div>
                    <div class="main_container">
                    </div>
                </div>
            </div>
        `;
    }

    mounted(): void {
        if (this.$target) {
            const $maniContainer = document.querySelector(".main_container");
            new MainContainer($maniContainer, this.$props);
        }
    }
}

export default Main;