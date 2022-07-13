import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { add, removeAll, removeLast, selectWords } from "../../store/words";
import { styles } from "./styles";

const Words = () => {
  const words: string[] = useAppSelector(selectWords);
  const dispatch = useAppDispatch();
  const [currentWord, setCurrentWord] = useState("");

  const onAddWordClick = () => {
    if (currentWord) {
      dispatch(add(currentWord));
      setCurrentWord("");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.containerTitle}>
        List of random words: {words.join()}
      </div>
      <div style={styles.wordsActions}>
        <input
          style={styles.actionElement}
          value={currentWord}
          onChange={(event) => setCurrentWord(event.target.value)}
        />
        <button onClick={onAddWordClick}>Add word</button>
        <button onClick={() => dispatch(removeLast())}>
          Remove last added
        </button>
        <button onClick={() => dispatch(removeAll())}>Remove all</button>
      </div>
    </div>
  );
};

export default Words;
