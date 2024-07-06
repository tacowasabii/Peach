import React from 'react';

const ResetButton: React.FC = () => {
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
          func: resetChanges,
        });
      } else {
        console.error('Tab ID is undefined.');
      }
    });
  };

  return (
    <button onClick={handleClick} id="reset-button" className="w-[55px]">
      <img src="/Reset-button.png" alt="Reset-button" />
    </button>
  );
};

const resetChanges = () => {
  // 모든 요소의 폰트 크기를 초기 상태로 되돌림
  const elements = document.getElementsByTagName(
    '*',
  ) as HTMLCollectionOf<HTMLElement>;
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.removeProperty('font-family');
    elements[i].style.removeProperty('font-size');
    elements[i].style.removeProperty('color');
    elements[i].style.removeProperty('background-color');
    if (elements[i].tagName === 'IMG') {
      elements[i].style.removeProperty('filter');
    }
  }

  // 문서 배경 색 초기화
  document.body.style.removeProperty('background-color');
};

export default ResetButton;
