import ColorButton from "./ColorButton";

function App() {
  return (
    <div className="w-[760px] h-10">
      <ColorButton backgroundColor="#ecdacc" textColor="#A992A6" imageSrc="/color-1.png" />
      <ColorButton backgroundColor="#eee9e6" textColor="#A992A6" imageSrc="/color-2.png" />
      <ColorButton backgroundColor="#ECF3EA" textColor="#A992A6" imageSrc="/color-3.png" />
      <ColorButton backgroundColor="#e9efe8" textColor="#008d86" imageSrc="/color-4.png" />
      <ColorButton backgroundColor="#098668" textColor="#ecdacc" imageSrc="/color-5.png" />
      <ColorButton backgroundColor="#1C3C54" textColor="#C6CED4" imageSrc="/color-6.png" />
      <button id="apply-mask" className="w-[55px]">
        <img src="/Screen-mask-on.png" alt="Screen-mask-on button" />
      </button>
      <button id="remove-mask" className="w-[55px]">
        <img src="/Screen-mask-off.png" alt="Screen-mask-off button" />
      </button>
      <button id="change-font-button" className="w-[55px]">
        <img src="/Change-font.png" alt="Change-font button" />
      </button>
      <button id="Font-size-up" className="w-[55px]">
        <img src="/Font-size-up.png" alt="Font-size-up button" />
      </button>
      <button id="Font-size-down" className="w-[55px]">
        <img src="/Font-size-down.png" alt="Font-size-down button" />
      </button>
      <button id="remove-reset" className="w-[55px]">
        <img src="/Deblurring_new.png" alt="Reset-button" />
      </button>
      <button id="reset" className="w-[55px]">
        <img src="/Reset-button.png" alt="Reset-button" />
      </button>
    </div>
  );
}

export default App;
