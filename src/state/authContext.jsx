import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({
  accessTokenContext: null,
  setAccessTokenContext: () => {},
});

export function AuthProvider({ children }) {
  const [accessTokenContext, setAccessTokenContext] = useState(null);
  return (
    <AuthContext.Provider value={{ accessTokenContext, setAccessTokenContext }}>
      {children}
    </AuthContext.Provider>
  );
}
