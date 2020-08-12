console.log("Background running");

var screenshot = {
    data : '',
    init : function() {
    this.initEvents();
    },

  initEvents : function () {
    chrome.browserAction.onClicked.addListener(function(tab) {
      chrome.tabs.captureVisibleTab(null,{
        format: "png",
        quality:100
      },function(dataUri){
      console.log(dataUri);
      var newURL = "screenshot.html";
      chrome.tabs.create({ url: newURL });
      });
    });

  }
}

screenshot.init();
