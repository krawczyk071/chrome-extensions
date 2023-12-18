chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "saveMap") {
    chrome.tabs.captureVisibleTab({ format: "png" }, function (dataUrl) {
      var a = document.createElement("a");
      a.href = dataUrl;
      a.download = "map.png";
      a.click();
    });
  }
});
