import React, { useState, useEffect, useRef } from 'react';

const Typist = (props) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const currentIndexRef = useRef(0);

  const words = props.words;

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentIndexRef.current];
      setText((prevText) => prevText + currentWord(prevText.length));

      if (text === words.join('')) {
        setIsTyping(false);
      }

      if (isTyping) {
        currentIndexRef.current++;
        setTimeout(type, 100);
      }
    };

    type(); // Start typing

    return () => setIsTyping(false); // Stop typing on unmount
  }, [isTyping, text, words]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Typist;
