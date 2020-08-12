console.log("Background running");
chrome.browserAction.onClicked.addListener(takeScreenshot)

function takeScreenshot(tab) {
  chrome.tabs.captureVisibleTab(null,{},function(dataUri){
  console.log(dataUri);
  openNewTab();
});

}
function openNewTab() {
   var newURL = "screenshot.html";
    chrome.tabs.create({ url: newURL });
}
