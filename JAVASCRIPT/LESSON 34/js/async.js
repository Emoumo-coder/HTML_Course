// Synchronous
export function sleep (miliseconds) {
    console.log("Operation is starting");
    let startTime = new Date().getTime();

    while (new Date().getTime() < startTime + miliseconds) {
        console.log("Operation is in progress");
    }

    console.log("Operation is done");
}
// Asynchronous
export function Asleep (miliseconds) {
    console.log("Operation is starting");
    setInterval(() => {
        console.log("Operation is in progress");
    }, miliseconds)

    console.log("Operation is done");
}