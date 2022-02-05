import React, { createContext, useState, useEffect } from "react";
import { Person } from "../types"
import { Members } from "../data"

interface ContextProps {
  setMember(m: string): void;
  member: string;
  memberData: Person
}
const contextInitialValue = {
  setMember: (v: string) => { },
  member: "aaron",
  memberData: Members[0]
} as ContextProps;
export const AppContext = createContext<ContextProps>(contextInitialValue);

export const AppProvider = ({ children }: any): JSX.Element => {
  const { Provider } = AppContext;
  const [data, setData] = useState(Members[0]);
  const [member, setMember] = useState<string>("aaron");

  useEffect(() => {
    const content = Members.filter((el) => el.id === member)[0];

    setData(content)

  }, [member])
  return <Provider value={{ member, setMember, memberData: data }}>{children}</Provider>;
};
