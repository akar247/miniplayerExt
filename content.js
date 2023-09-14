chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'getVideoUrl') {
    var videoUrl = getVideoUrl();
    sendResponse({ videoUrl: videoUrl });
  }
});

function getVideoUrl() {
  var videoElement = document.querySelector('video');
  if (videoElement) {
    return videoElement.src;
  }
  return null;
}
