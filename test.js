console.log("Background running");
chrome.browserAction.onClicked.addListener(buttonClicked)

 function buttonClicked(tab) {
   console.log("button clicked");
       chrome.tabs.captureVisibleTab(null,{},function(dataUri){
           console.log(dataUri);
       });
     }
