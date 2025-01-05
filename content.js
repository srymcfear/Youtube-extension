const currentUrl = window.location.href;

if (currentUrl.includes('youtube.com/watch?v=')) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = '#5082ff';
  notification.style.color = 'white';
  notification.style.padding = '5px 15px';
  notification.style.borderRadius = '10px';
  notification.style.zIndex = '10000';
  notification.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  notification.style.display = 'flex';
  notification.style.flexDirection = 'column';
  notification.style.alignItems = 'center';
  notification.style.gap = '8px';
  notification.style.cursor = 'pointer';
  notification.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';

  notification.addEventListener('mouseenter', () => {
    notification.style.transform = 'translateY(-2px)';
    notification.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';
  });
  notification.addEventListener('mouseleave', () => {
    notification.style.transform = 'translateY(0)';
    notification.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  });

  const message = document.createElement('div');
  message.textContent = 'Youtube NoAds';
  message.style.fontSize = '14px';
  message.style.fontWeight = 'bold';
  notification.appendChild(message);

  const footer = document.createElement('div');
  footer.textContent = 'Dev by SrymC';
  footer.style.fontSize = '9px';
  footer.style.color = '#000000';
  notification.appendChild(footer);

  notification.addEventListener('click', () => {
    const videoId = currentUrl.split('v=')[1].split('&')[0];
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    window.location.href = embedUrl;
  });

  document.body.appendChild(notification);

  // Tự động ẩn thông báo sau 5 giây
  // setTimeout(() => {
  //   notification.remove();
  // }, 5000);
}