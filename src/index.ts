import App from "@/App";
import { initWorker } from "@/mocks";

let initial: any = false;
if (process.env.NODE_ENV === "development") {
    initial = await initWorker();
} else {
    initial = true;
}

if (initial) {
    document.body.style.margin="0";

    const $app = document.querySelector('#app');

    new App($app);
}