// popup.js

// Execute content script function to save images when the button is clicked
document.getElementById("saveButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.executeScript(activeTab.id, { file: "content.js" });
  });
});
