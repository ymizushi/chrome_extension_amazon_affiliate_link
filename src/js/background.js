$(function() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        alert(request);
        if (request.method == "getLocalStorage") {
            sendResponse({data: localStorage.getItem(request.key)});
        }else{
            sendResponse({});
        }
    });
});
