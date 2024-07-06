import React from 'react';

const DecreaseFontSizeButton: React.FC = () => {
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      if (!tabs[0].url?.startsWith('http')) {
        alert('This extension works on http and https pages only.');
        return;
      }
      if (tabId !== undefined) {
        chrome.scripting.executeScript({
          target: { tabId },
          func: decreaseFontSize,
        });
      } else {
        console.error('Tab ID is undefined.');
      }
    });
  };

  return (
    <button onClick={handleClick} id="Font-size-down" className="w-[55px]">
      <img src="/Font-size-down.png" alt="Font-size-down button" />
    </button>
  );
};

const decreaseFontSize = () => {
  const elements = document.getElementsByTagName(
    '*',
  ) as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < elements.length; i++) {
    const style = window
      .getComputedStyle(elements[i], null)
      .getPropertyValue('font-size');
    const fontSize = parseFloat(style);
    elements[i].style.setProperty(
      'font-size',
      fontSize - 0.5 + 'px',
      'important',
    );
  }
};

export default DecreaseFontSizeButton;
