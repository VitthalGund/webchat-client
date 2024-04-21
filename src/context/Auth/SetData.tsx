import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { auth, userData } from "../../types/authContext";


const SetData = (prop) => {
    const [userData, setUserData] = useState<userData>({ name: "", username: "", email: "" });
    const [auth, setAuth] = useState<auth>({ email: "", roles: [], accessToken: "", username: "" });
    const [isLogin, setIsLogin] = useState<boolean>(false)
    // const [rmail, setRmail] = useState();
    const [persist, setPersist] = useState<string>(JSON.parse(localStorage.getItem("persist")!) || "false");
    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist));
    }, [persist])

    const updateUserData = (data: userData) => {
        setUserData(data);
    }

    const updateAuth = (data: auth) => {
        setAuth(data)
    }
    const updateIsLogin = (data: boolean) => {
        setIsLogin(data);
    }
    return (
        <UserContext.Provider value={{ userData, updateUserData, isLogin, updateIsLogin, auth, updateAuth, setPersist, persist }}>
            {prop.children}
        </UserContext.Provider>
    )
}
export default SetData;