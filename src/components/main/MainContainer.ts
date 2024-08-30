import { Component } from "@/core";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { getPosts } from "@/apis";

class MainContainer extends Component {
    setup(): void {
        this.$state = {
            postList: []
        };
    }

    mounted(): void {
        getPosts()
        .then(res => {
            const postList = res.resultData;
            console.log({postList})
            this.setState({
                postList: res.resultData
            });
        });
    }

    template(): string {
        return `
            <div class="main_left">
            </div>
            <div class="main_right">
            </div>
        `;
        
    }
    
    createComponent(): void {
        const {postList} = this.$state;

        const $mainLeft = document.querySelector(".main_left");
        const $mainRight = document.querySelector(".main_right");

        new MainLeft($mainLeft, {postList});
        new MainRight($mainRight, this.$props);
    }
}

export default MainContainer;