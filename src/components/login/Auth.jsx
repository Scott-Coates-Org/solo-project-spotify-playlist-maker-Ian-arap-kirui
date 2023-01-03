import Cookies from 'js-cookie';
import React, { useContext, createContext, useState } from 'react';

export const AuthContext = createContext();
const spotifyAuthTokenCookie = 'spotifyAuthToken';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(Cookies.get(spotifyAuthTokenCookie));
  const [token, setToken] = useState(Cookies.get(spotifyAuthTokenCookie));

  function setUserWrapper(user) {
    Cookies.set(spotifyAuthTokenCookie, user);
    setUser(user);
  }

  function setTokenWrapper(token) {
    if (token == null) {
      Cookies.remove(spotifyAuthTokenCookie);
    } else {
      const in60Minutes = 1 / 24;
      Cookies.set(spotifyAuthTokenCookie, token, { expires: in60Minutes });
    }

    setToken(token);
  }

  return (
    <AuthContext.Provider value={{ user, setUser: setUserWrapper, token, setToken: setTokenWrapper }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
