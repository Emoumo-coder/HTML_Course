export function something () {

    setTimeout(() => {
        console.log('The job is done!');
    }, 1000);

    setInterval(() => {
        console.log("Job is in progress...");
    }, 1000)

    console.log("I am doing a job.");
}