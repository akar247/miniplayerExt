document.addEventListener('DOMContentLoaded', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var playPauseButton = document.getElementById('playPauseButton');
    var skipBackwardButton = document.getElementById('skipBackwardButton');
    var skipForwardButton = document.getElementById('skipForwardButton');
  
    playPauseButton.addEventListener('click', function () {
      if (videoPlayer.paused) {
        videoPlayer.play();
      } else {
        videoPlayer.pause();
      }
    });
  
    skipBackwardButton.addEventListener('click', function () {
      videoPlayer.currentTime -= 10;
    });
  
    skipForwardButton.addEventListener('click', function () {
      videoPlayer.currentTime += 10;
    });
  
    var params = new URLSearchParams(window.location.search);
    var videoUrl = params.get('videoUrl');
  
    if (videoUrl) {
      videoPlayer.src = decodeURIComponent(videoUrl);
      videoPlayer.load();
      videoPlayer.play().catch(function (error) {
        console.error('Failed to play video:', error);
      });
    }
  });
  