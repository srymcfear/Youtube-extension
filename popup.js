const redirectButton = document.getElementById('redirectButton');
const updateNotification = document.getElementById('updateNotification');

function redirectToEmbed() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    const currentUrl = currentTab.url;

    if (currentUrl.includes('youtube.com/watch?v=')) {
      const videoId = currentUrl.split('v=')[1].split('&')[0];
      const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
      chrome.tabs.update(currentTab.id, { url: embedUrl });
    } else {
      alert('Vui lòng mở video Youtube.');
    }
  });
}

function checkForUpdateNotification() {
  chrome.storage.sync.get(['latestVersion'], (result) => {
    const currentVersion = chrome.runtime.getManifest().version;
    const latestVersion = result.latestVersion;

    if (latestVersion && currentVersion !== latestVersion) {
      updateNotification.style.display = 'block';
      updateNotification.innerHTML = `
        <p>A new version (v${latestVersion}) is available!</p>
        <a href="https://github.com/srymcfear/verify_me/releases" target="_blank">Update Now</a>
      `;
    }
  });
}

redirectButton.addEventListener('click', redirectToEmbed);
checkForUpdateNotification();