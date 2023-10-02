document.addEventListener("DOMContentLoaded", () => {
    //Get the buttons
    let startBtn = document.querySelector("#startBtn");
    // let stopBtn = document.querySelector(".stop-recording");

    //EventListener for start-recording button
    startBtn.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {action:"request_recording"}, function(response){ 
                if(!chrome.runtime.lastError){
                    console.log(response);
                } else {
                    console.log(chrome.runtime.lastError, "error on line 13");
                    window.alert('Hey I am working here');
                }
            })
        })
    })

    // stopBtn.addEventListener("click", () => {
    //     chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
    //         chrome.tabs.sendMessage(tabs[0].id, {action:"stopVideo"}, function(response){
    //             if(!chrome.runtime.lastError){
    //                 console.log(response);
    //             } else {
    //                 console.log(chrome.runtime.lastError, "error on line 25")
    //             }
    //         })
    //     })
    // })


    // Request microphone and camera permissions before starting a recording session.
// function startRecording() {
//     chrome.permissions.request({
//         permissions: ["audioCapture", "videoCapture"]
//     }, (granted) => {
//         if (granted) {
//             console.log("Microphone and camera permissions granted.");
//             // Start the recording session.
//             // Access microphone and camera here.
//         } else {
//             console.log("Microphone and camera permissions not granted.");
//             // Handle the case where the user did not grant the permissions.
//         }
//     });
// }
// NB:Remember to Handle Permission Revocation

})