interface ColorButtonProps {
  backgroundColor: string;
  textColor: string;
  imageSrc: string;
}

const changeColors = (backgroundColor: string, textColor: string) => {
  document.body.style.backgroundColor = backgroundColor;
  const elements = document.getElementsByTagName(
    '*',
  ) as HTMLCollectionOf<HTMLElement>;

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = textColor;
    elements[i].style.backgroundColor = backgroundColor;

    if (elements[i].tagName === 'IMG') {
      elements[i].style.filter = 'grayscale(100%) blur(25px)';
    }

    if (elements[i].tagName === 'A') {
      elements[i].style.color = textColor;
    }
  }
};

const ColorButton = ({
  backgroundColor,
  textColor,
  imageSrc,
}: ColorButtonProps) => {
  const handleClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (!tabs[0].url?.startsWith('http')) {
        alert('This extension works on http and https pages only.');
        return;
      }
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id as number },
        func: changeColors,
        args: [backgroundColor, textColor],
      });
    });
  };

  return (
    <button onClick={handleClick} className="w-[55px]">
      <img src={imageSrc} alt="color button" />
    </button>
  );
};

export default ColorButton;
