const ForgotPass = ({ text, href }) => {
  return (
    <div>
      <a href={href} className="text-[#216fdb] text-[14px] cursor-pointer">
        {text}
      </a>
    </div>
  );
};

export default ForgotPass;
