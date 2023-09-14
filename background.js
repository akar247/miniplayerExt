chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'openMiniPlayer') {
    openMiniPlayer();
  }
});

function openMiniPlayer() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentURL = new URL(tabs[0].url);
    var hostname = currentURL.hostname;

    if (hostname === 'www.youtube.com' || hostname === 'www.netflix.com') {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      }, function () {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getVideoUrl' }, function (response) {
          if (response && response.videoUrl) {
            var videoUrl = response.videoUrl;
            var miniPlayerUrl = chrome.runtime.getURL('miniplayer.html') + '?videoUrl=' + encodeURIComponent(videoUrl);
            chrome.windows.create({
              url: miniPlayerUrl,
              type: 'popup',
              width: 400,
              height: 300
            });
          }
        });
      });
    } else {
      alert('Cannot create miniplayer on this website.');
    }
  });
}
