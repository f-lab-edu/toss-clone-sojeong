import { Component } from "@/core";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

class MainContainer extends Component {
    template(): string {
        return `
            <div class="main_left">
            </div>
            <div class="main_right">
            </div>
        `;
    }

    mounted(): void {
        const $mainLeft = document.querySelector(".main_left");
        const $mainRight = document.querySelector(".main_right");

        new MainLeft($mainLeft, this.$props);
        new MainRight($mainRight, this.$props);
    }

}

export default MainContainer;