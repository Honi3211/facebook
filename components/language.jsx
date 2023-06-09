const Language = ({ text, className }) => {
  return (
    <div
      className={`${className} w-full flex justify-center text-[12px] cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Language;
