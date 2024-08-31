import { Component } from "@/core";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import { getLives, getPosts } from "@/apis";

class MainContainer extends Component {
    setup(): void {
        this.$state = {
            postList: [],
            liveList: [],
        };
    }

    mounted(): void {
        getPosts()
        .then(res => {
            const postList = res.resultData;

            this.setState({
                postList
            });
        });

        getLives()
        .then(res => {
            const liveList = res.resultData;

            this.setState({liveList});
        })
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
        const {postList, liveList} = this.$state;

        const $mainLeft = document.querySelector(".main_left");
        const $mainRight = document.querySelector(".main_right");

        new MainLeft($mainLeft, {postList});
        new MainRight($mainRight, {postList, liveList});
    }
}

export default MainContainer;