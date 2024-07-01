document.getElementById('red').addEventListener('click', () => {
    changeBackgroundColor('red');
  });
  
  document.getElementById('green').addEventListener('click', () => {
    changeBackgroundColor('green');
  });
  
  document.getElementById('blue').addEventListener('click', () => {
    changeBackgroundColor('blue');
  });
  
  function changeBackgroundColor(color) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: setPageBackgroundColor,
        args: [color]
      });
    });
  }
  
  function setPageBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  