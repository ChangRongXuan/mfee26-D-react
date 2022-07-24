import React  from "react";

const AuthContext = React.createContext({
    authorized: false, //true有登入；false沒登入
    sid: 0,
    account: '',
    token:''
});

export default AuthContext;