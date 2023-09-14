document.addEventListener('DOMContentLoaded', function () {
    var miniPlayerButton = document.getElementById('miniPlayerButton');
  
    miniPlayerButton.addEventListener('click', function () {
      chrome.runtime.sendMessage({ action: 'openMiniPlayer' });
    });
  });
  