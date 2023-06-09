const CreateNewAccPart = () => {
  return (
    <div className="w-full max-w-[416px] flex flex-col items-center">
      <div className="flex w-full items-center">
        <div className="border-b border-[#ccd0d5] h-[1px] w-full max-w-[200px]"></div>
        <div className="px-[16px]">or</div>
        <div className="border-b border-[#ccd0d5] w-full max-w-[200px]"></div>
      </div>
      <div className="mt-[16px]"></div>
      <div className="cursor-pointer w-full max-w-[332px] text-black text-[15px] h-[34px] bg-white border border-[#bec3c9] flex justify-center items-center rounded px-[8px] py-[3px]">
        Create new account
      </div>
    </div>
  );
};

export default CreateNewAccPart;
