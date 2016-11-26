    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.method == "getLocalStorage") {
            sendResponse({data: localStorage.getItem(request.key)});
        }else{
            sendResponse({});
        }
    });
