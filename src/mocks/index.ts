export async function initWorker() {
    const {worker} = await import ("@/mocks/browser")
    return worker.start()
}