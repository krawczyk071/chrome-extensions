//content script
var clickedEl = null;

document.addEventListener(
  "contextmenu",
  function (event) {
    clickedEl = event.target;
  },
  true
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "getClickedEl") {
    console.log(clickedEl);

    // Get the computed style of the div
    const computedStyle = window.getComputedStyle(clickedEl);

    // Extract the background-image property value
    const myImg = computedStyle.getPropertyValue("background-image");
    console.log(myImg);
    // To extract the URL specifically, you might need to further process the obtained value
    const urlRegex = /url\("(.+)"\)/; // Regex to extract URL from 'url("...")'
    const matches = myImg.match(urlRegex);
    console.log(matches[1]);

    // Find the last occurrence of '='
    const urlString = matches[1];
    const lastIndex = urlString.lastIndexOf("=");
    const substringBeforeLastEqual = urlString.substring(0, lastIndex + 1); // Include '='
    const myImgUrl = substringBeforeLastEqual + "s0";

    sendResponse({ value: myImgUrl });
  }
});
