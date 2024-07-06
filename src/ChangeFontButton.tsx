const ChangeFontButton = () => {
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
          func: changeFont,
        });
      } else {
        console.error('Tab ID is undefined.');
      }
    });
  };

  const changeFont = () => {
    const elements = document.getElementsByTagName(
      '*',
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = 'noto, sans-serif';
    }

    const checkExist = setInterval(function () {
      const frame = document.getElementById(
        'mainFrame',
      ) as HTMLIFrameElement | null;
      if (frame) {
        const doc = frame.contentDocument || frame.contentWindow?.document;
        if (doc) {
          const frameElements = doc.getElementsByTagName(
            '*',
          ) as HTMLCollectionOf<HTMLElement>;
          for (let i = 0; i < frameElements.length; i++) {
            frameElements[i].style.fontFamily = 'noto, sans-serif';
          }
          clearInterval(checkExist);
        }
      }
    }, 100); // check every 100ms
  };

  return (
    <button onClick={handleClick} id="change-font-button" className="w-[55px]">
      <img src="/Change-font.png" alt="Change font button" />
    </button>
  );
};

export default ChangeFontButton;
