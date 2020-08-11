console.log("Background running");
chrome.browserAction.onClicked.addListener(openNewTab)

 function openNewTab(tab) {
   chrome.tabs.create({'url':"chrome://newtab"})
       chrome.tabs.captureVisibleTab(null,{},function(dataUri){
           console.log(dataUri);
       });
     }
