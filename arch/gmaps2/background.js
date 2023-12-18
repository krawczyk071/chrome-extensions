chrome.contextMenus.create({
  id: "googlemaps-photo-downloader3",
  title: "Save Google Maps Photo",
  contexts: ["image"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "googlemaps-photo-downloader3") {
    const imgEl = info.selection.getCurrentElement();
    // console.log(imgEl);
    const imgUrl = imgEl.src;

    saveImage(imgUrl, tab);
  }
});

function saveImage(imgUrl, tab) {
  chrome.downloads.download({
    url: imgUrl,
    saveAs: true,
  });
}
