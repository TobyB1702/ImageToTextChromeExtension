console.log("Background running");
chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked() {
  console.log("I HAVE BEEN CLICKED")
}
