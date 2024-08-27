//import { worker } from "@/mocks/browser";

export async function initWorker() {
    const {worker} = await import ("@/mocks/browser")
    return worker.start();
    //await worker.start();
}