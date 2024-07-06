const RemoveMaskButton = () => {
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0].url?.startsWith('http')) {
        alert('This extension works on http and https pages only.');
        return;
      }
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id as number },
        func: removeMask,
      });
    });
  };

  const removeMask = () => {
    const maskTop = document.getElementById('mask-top');
    if (maskTop) {
      maskTop.remove();
    }

    const maskBottom = document.getElementById('mask-bottom');
    if (maskBottom) {
      maskBottom.remove();
    }
  };

  return (
    <button onClick={handleClick} className="w-[55px]">
      <img src="/Screen-mask-off.png" alt="Screen-mask-off button" />
    </button>
  );
};

export default RemoveMaskButton;
