chrome.contextMenus.create({
  id: "googlemaps-photo-downloader3",
  title: "Save d Photo",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "googlemaps-photo-downloader3") {
    console.log(info);
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
