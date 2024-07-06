const RemoveBlurButton = () => {
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
          func: removeBlur,
        });
      } else {
        console.error('Tab ID is undefined.');
      }
    });
  };

  return (
    <button onClick={handleClick} id="remove-reset" className="w-[55px]">
      <img src="/Deblurring_new.png" alt="Reset-button" />
    </button>
  );
};

const removeBlur = () => {
  // 모든 이미지 요소 가져오기
  const elements = document.getElementsByTagName(
    'img',
  ) as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < elements.length; i++) {
    // 현재 요소의 스타일 가져오기
    const style = window.getComputedStyle(elements[i]);

    // 현재 요소의 필터 스타일이 블러를 포함하면 블러 제거
    if (style.filter.includes('blur')) {
      elements[i].style.filter = style.filter.replace(/blur\(.*?\)/g, '');
    }
  }
};

export default RemoveBlurButton;
