// var elt = null;

chrome.contextMenus.create({
  id: "googlemaps-photo-downloader",
  title: "Save Google Maps Photo",
  contexts: ["all"],
});

// chrome.contextMenus.onClicked.addListener(function (info, tab) {
//   if (info.menuItemId === "googlemaps-photo-downloader") {
//     // const imgEl = info.selection.getCurrentElement();
//     // const imgUrl = imgEl.src;

//     const imgUrl = info.srcUrl;
//     console.log(info);
//     saveImage(imgUrl, tab);

//   }
// });

function saveImage(imgUrl, tab) {
  chrome.downloads.download({
    url: imgUrl,
    saveAs: true,
  });
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "googlemaps-photo-downloader") {
    askDomElement(info, tab);
    // console.log("elt");
    // console.log(asked);
  }
});

function askDomElement(info, tab) {
  chrome.tabs.sendMessage(
    tab.id,
    "getClickedEl",
    { frameId: info.frameId },
    (data) => {
      console.log(data.value);
      saveImage(data.value, tab);
      // elt = data.value;
      // return data.value;
    }
  );
}
