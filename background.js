let recognition;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === 'startListening') {
    startListening();
  }
});

function startListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = true;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const speechResult = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log('Speech received: ' + speechResult);

    if (speechResult.includes('scroll down')) {
      scrollPage('down');
    } else if (speechResult.includes('scroll up')) {
      scrollPage('up');
    } else if (speechResult.includes('click')) {
      clickElement(speechResult.replace('click ', ''));
    } else if (speechResult.includes('go to')) {
      navigateTo(speechResult.replace('go to ', ''));
    }
  };

  recognition.onerror = (event) => {
    console.error(event.error);
    recognition.stop();
  };

  recognition.onend = () => {
    console.log('Speech recognition service disconnected');
  };

  recognition.start();
}

function scrollPage(direction) {
  chrome.scripting.executeScript({
    target: { tabId: getActiveTabId() },
    function: (direction) => {
      window.scrollBy(0, direction === 'down' ? window.innerHeight : -window.innerHeight);
    },
    args: [direction]
  });
}

function clickElement(elementDescription) {
  chrome.scripting.executeScript({
    target: { tabId: getActiveTabId() },
    function: (elementDescription) => {
      const elements = document.querySelectorAll('a, button');
      for (let element of elements) {
        if (element.textContent.trim().toLowerCase().includes(elementDescription)) {
          element.click();
          break;
        }
      }
    },
    args: [elementDescription]
  });
}

function navigateTo(url) {
  chrome.tabs.update({ url: 'http://' + url });
}

function getActiveTabId() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      resolve(tabs[0].id);
    });
  });
}
