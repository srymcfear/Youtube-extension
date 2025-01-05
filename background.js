const VERSION_CHECK_URL =
  "https://raw.githubusercontent.com/srymcfear/verify_me/refs/heads/main/version/version.json";

async function checkForUpdates() {
  try {
    const currentVersion = chrome.runtime.getManifest().version;
    const response = await fetch(VERSION_CHECK_URL);
    const data = await response.json();
    const latestVersion = data["youtubeads-ver"];

    if (currentVersion !== latestVersion) {
      chrome.storage.sync.set({ latestVersion }, () => {
        console.log("Có bản cập nhật mới:", latestVersion);
      });
    } else {
      console.log("Extension đã được cập nhật.");
    }
  } catch (error) {
    console.error("Failed to check for updates:", error);
  }
}

chrome.runtime.onInstalled.addListener(checkForUpdates);
chrome.runtime.onStartup.addListener(checkForUpdates);
setInterval(checkForUpdates, 24 * 60 * 60 * 1000);