// content.js

// Function to save image
function saveImage(url) {
  // Logic to save the image (e.g., using browser APIs)
  // For example, you can use the download API to save the image
  // Here's an example of how you might do that:
  chrome.downloads.download({ url: url });
}

// Find and save images
function saveMapImages() {
  // Example: Find all images in Google Maps and save them
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    const imageUrl = img.src;
    saveImage(imageUrl);
  });
}

// Execute function when the extension icon is clicked
chrome.browserAction.onClicked.addListener(saveMapImages);
