import React from 'react';

type Props = {
  text: string;
  className?: string;
}

function SimpleButton({ text, className = "" }: Props) {
  const defaultPadding = "px-8 py-4";

  return (
    <button
      className={`
        ${defaultPadding}
        font-bold text-white/40 border-2 border-white/10
        hover:border-white/30 hover:text-white transition-all cursor-pointer
        ${className}
      `}
    >
      {text} →
    </button>
  );
}

export default SimpleButton;