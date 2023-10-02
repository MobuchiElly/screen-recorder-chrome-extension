//chrome object

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "loading" && /^http/.test(tab.url)){
        chrome.scripting.executeScript({
            target: {tabId},
            files: ["./content.js"]
        }).then(() => {
            console.log("content script has been injected");
        }).catch(err => console.log(err, "error in background script line 10"));
    }
})


// Add this to manifest.json
// "optional_permissions": [
//     "audioCapture",
//     "videoCapture"
// ],