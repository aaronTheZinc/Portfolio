import React, { createContext, useState } from "react";

interface ContextProps {
  setMember(m: string): void;
  member: string;
}
const contextInitialValue = {
  setMember: (v: string) => {},
  member: "aaron",
} as ContextProps;
export const AppContext = createContext<ContextProps>(contextInitialValue);

export const AppProvider = ({ children }: any): JSX.Element => {
  const { Provider } = AppContext;
  const [member, setMember] = useState<string>("aaron");
  return <Provider value={{ member, setMember }}>{children}</Provider>;
};
