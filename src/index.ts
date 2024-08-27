import App from "@/App";
import { initWorker } from "@/mocks";

if (process.env.NODE_ENV === "development") {
    initWorker().then(() => {
        document.body.style.margin="0";

const $app = document.querySelector('#app');

new App($app);
    })
}

// document.body.style.margin="0";

// const $app = document.querySelector('#app');

// new App($app);