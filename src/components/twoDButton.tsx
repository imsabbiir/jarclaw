import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
  text: string;
  className?: string;
}

function TwoDButton({ text, className = "" }: Props) {
  // default padding classes
  const defaultClasses = "px-5 py-2.5";

  return (
    <button
      className={`
        bg-[#fe5104] uppercase tracking-widest text-black font-bold
        transition-all flex items-center gap-2 cursor-pointer
        hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#fff]
        ${defaultClasses} ${className}
      `}
    >
      {text} <FaLongArrowAltRight />
    </button>
  );
}

export default TwoDButton;