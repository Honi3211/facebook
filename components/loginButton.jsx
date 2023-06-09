const LoginButton = ({ text, onClick, href }) => {
  return (
    <div
      onClick={onClick}
      className="w-full max-w-[416px] text-white text-[17px] h-[40px] bg-[#1877f2] flex justify-center items-center font-bold rounded shadow-md cursor-pointer"
    >
      {text}
    </div>
  );
};

export default LoginButton;
