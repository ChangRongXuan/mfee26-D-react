import React, { useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from 'react-router-dom'

export default function AuthContextProvider({ children }) {
    const unAuthState = {
        authorized: false,
        sid: 0,
        account: "",
        token: "",
    };

    // 順序是: 會員登入->存資料在localStorage(key=auth)
    // 先查看 localStorage 的資料是否表示已登入
    const localAuthStr = localStorage.getItem("auth");
    let localAuth = {...unAuthState};
    if (localAuthStr) {
        try {
            localAuth = JSON.parse(localAuthStr);
            if (localAuth.account && localAuth.token) {
                localAuth = { ...localAuth, authorized: true };
            }
        } catch (ex) {} //這邊的ex不知道是什麼意思?
    }
    const [auth, setAuth] = useState(localAuth);
    const navigate = useNavigate();

    // 登出時清掉 localStorage
    const logout = ()=>{
        localStorage.removeItem("auth");
        setAuth({...unAuthState}); //把狀態設成沒有登入的狀態
        navigate('/'); //要跳轉至非會員可看的畫面
    };

    return (
        <AuthContext.Provider value={{ ...auth, setAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
