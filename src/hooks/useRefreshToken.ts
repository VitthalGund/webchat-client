import { api } from "../api/axios";
import { useContext } from "react";
import AuthenticationContext from "../context/Auth/userContext";
import { AuthContext } from "../types/authContext";

const useRefreshToken = () => {
  const { auth, userData, updateAuth, updateUserData } = useContext(
    AuthenticationContext
  ) as AuthContext;

  const refresh = async () => {
    const response = await api.get("/refresh", {
      withCredentials: true,
    });
    updateAuth({
      ...auth,
      accessToken: response.data.access_token,
      username: response.data.username,
      email: response.data.email,
      roles: response.data.roles,
    });

    updateUserData({
      ...userData,
      username: response.data.username,
      email: response.data.email,
    });

    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
