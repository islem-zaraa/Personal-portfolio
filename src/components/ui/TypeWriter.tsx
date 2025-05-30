import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  className = '',
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Initialize with the first text on component mount
  useEffect(() => {
    if (texts.length > 0) {
      setCurrentText('');
    }
  }, [texts]);

  useEffect(() => {
    if (texts.length === 0) return;
    
    let timeout: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetween);
      return () => clearTimeout(timeout);
    }

    const currentFullText = texts[textIndex];
    
    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      if (currentText === currentFullText) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, textIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={className}>
      {currentText}
      <span className="typewriter-cursor"></span>
    </span>
  );
};

export default TypeWriter; 