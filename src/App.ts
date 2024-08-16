import { Component, Type } from "./core";
import Nav from "./components/Nav";
import "../public/css/style.css";


class App extends Component {
    constructor($target: HTMLElement, $props?: any) {
        super($target, $props);
    }

    mounted(): void {
        new Nav(this.$target, this.$props);
    }
}

export default App;