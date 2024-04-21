export type userData = {
  username: string;
  email: string;
  name: string;
};

export type auth = {
  email: string;
  roles: number[];
  accessToken: string;
  username: string;
};

export type AuthContext = {
  updateUserData: (data: userData) => void;
  updateAuth: (data: auth) => void;
  setPersist: (data: string) => void;
  auth: auth;
  userData: userData;
  persist: string;
  updateIsLogin: (data: boolean) => void;
  isLogin: boolean;
};
