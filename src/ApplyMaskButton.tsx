import React from 'react';

const ApplyMaskButton = () => {
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0].url?.startsWith('http')) {
        alert('This extension works on http and https pages only.');
        return;
      }
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id as number },
        func: applyMask,
      });
    });
  };

  const applyMask = () => {
    const maskTop = document.createElement('div');
    maskTop.id = 'mask-top';
    maskTop.style.position = 'fixed';
    maskTop.style.top = '0';
    maskTop.style.left = '0';
    maskTop.style.width = '100vw';
    maskTop.style.height = '29vh';
    maskTop.style.backgroundColor = 'rgba(0, 0, 0, 2.5)';
    maskTop.style.zIndex = '9999';
    document.body.appendChild(maskTop);

    const maskBottom = document.createElement('div');
    maskBottom.id = 'mask-bottom';
    maskBottom.style.position = 'fixed';
    maskBottom.style.bottom = '0';
    maskBottom.style.left = '0';
    maskBottom.style.width = '100vw';
    maskBottom.style.height = '29vh';
    maskBottom.style.backgroundColor = 'rgba(0, 0, 0, 2.5)';
    maskBottom.style.zIndex = '9999';
    document.body.appendChild(maskBottom);
  };

  return (
    <button onClick={handleClick} className="w-[55px]">
      <img src="/Screen-mask-on.png" alt="Screen-mask-on button" />
    </button>
  );
};

export default ApplyMaskButton;