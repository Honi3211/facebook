const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className="p-[12px] bg-[#f5f6f7] text-[14px] border w-full max-w-[416px] h-[42px] rounded"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
