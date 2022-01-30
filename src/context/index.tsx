import React, { createContext, useState } from "react";

interface ContextProps {
  setMember(m: string): void;
  member: string;
}
const contextInitialValue = {
  setMember: (v: string) => {},
  member: "",
} as ContextProps;
const AppContext = createContext<ContextProps>(contextInitialValue);

export const AppProvider = ({ children }: any): JSX.Element => {
  const { Provider } = AppContext;
  const [member, setMember] = useState<string>("");
  return <Provider value={{ member, setMember }}>{children}</Provider>;
};
