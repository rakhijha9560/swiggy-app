import { createContext } from "react";

const UserContext = createContext({
  user: { name: "dummyName", email: "abc@gmail.com"},
});

UserContext.displayName = "UserContext";

export default UserContext;
