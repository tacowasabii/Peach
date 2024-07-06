import ApplyMaskButton from './ApplyMaskButton';
import ChangeFontButton from './ChangeFontButton';
import ColorButton from './ColorButton';
import DecreaseFontSizeButton from './DecreaseFontSizeButton';
import IncreaseFontSizeButton from './IncreaseFontSizeButton';
import RemoveBlurButton from './RemoveBlurButton';
import RemoveMaskButton from './RemoveMaskButton';
import ResetButton from './ResetButton';

function App() {
  return (
    <div className="h-10 w-[760px]">
      <ColorButton
        backgroundColor="#ecdacc"
        textColor="#A992A6"
        imageSrc="/color-1.png"
      />
      <ColorButton
        backgroundColor="#eee9e6"
        textColor="#A992A6"
        imageSrc="/color-2.png"
      />
      <ColorButton
        backgroundColor="#ECF3EA"
        textColor="#A992A6"
        imageSrc="/color-3.png"
      />
      <ColorButton
        backgroundColor="#e9efe8"
        textColor="#008d86"
        imageSrc="/color-4.png"
      />
      <ColorButton
        backgroundColor="#098668"
        textColor="#ecdacc"
        imageSrc="/color-5.png"
      />
      <ColorButton
        backgroundColor="#1C3C54"
        textColor="#C6CED4"
        imageSrc="/color-6.png"
      />
      <ApplyMaskButton />
      <RemoveMaskButton />
      <ChangeFontButton />
      <IncreaseFontSizeButton />
      <DecreaseFontSizeButton />
      <RemoveBlurButton />
      <ResetButton />
    </div>
  );
}

export default App;
