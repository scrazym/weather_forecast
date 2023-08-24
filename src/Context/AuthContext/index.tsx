import { createContext, useContext, useState } from "react";

import ChildProps from "../themeContext";

interface IAuthContext {
  user: string | null;
  password: string | null;
  logIn: (newUser: string, newPass: string, callback: () => void) => void;
  logOut: (callback?: (() => void) | undefined) => void;
}

export const AuthContext = createContext({} as IAuthContext);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: ChildProps) => {
  const [user, setNewUser] = useState<string | null>(null);
  const [newPass, setNewPass] = useState<string | null>(null);
  const handleLogIn = (
    newUser: string,
    newPass: string,
    callback: () => void
  ) => {
    setNewUser(newUser);
    console.log(newPass, newUser, "ayth");
    setNewPass(newPass);
    callback();
  };

  const logOut = (callback?: (() => void) | undefined) => {
    setNewUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        password: newPass,
        logIn: handleLogIn,
        logOut: logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
