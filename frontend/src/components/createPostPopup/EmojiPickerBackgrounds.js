import Picker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

const EmojiPickerBackgrounds = ({ text, setText, textRef }) => {
  const [picker, setPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();

  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleEmoj = (e, { emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };
  return (
    <div className="post_emojis_wrap">
      {picker && (
        <div className="comment_emoji_picker rlmove">
          <Picker onEmojiClick={handleEmoj} />
        </div>
      )}
      <img src="../../../icons/colorful.png" alt="" />
      <i
        className="emoji_icon_large"
        onClick={() => setPicker((prev) => !prev)}
      ></i>
    </div>
  );
};

export default EmojiPickerBackgrounds;
