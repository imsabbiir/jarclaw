type Props = {
  text: string;
};
function Glitch({ text }: Props) {
  return (
    <span
      className="glitch-text relative text-[#fe5104] inline-block font-space"
      data-text={`${text}`}
    >
      {text}
    </span>
  );
}

export default Glitch;
