document.getElementById('start-btn').addEventListener('click', () => {
  chrome.runtime.sendMessage({ command: 'startListening' });
  document.getElementById('status').textContent = 'Status: Listening...';
});
