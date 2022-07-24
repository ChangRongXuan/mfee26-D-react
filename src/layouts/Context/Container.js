import React from "react";
import AuthContextProvider from "./AuthContextProvider";

export default function Container({ children }) {
    return (
            <AuthContextProvider>{children}</AuthContextProvider>
    );
}
