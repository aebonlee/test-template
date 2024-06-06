import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    login: (token: string) => void;
    logout: () => void;
    kakaoLogin: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isLoggedIn: localStorage.getItem("token") ? true : false,
    login: () => {},
    logout: () => {},
    kakaoLogin: () => {},
});

export const AuthProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);

    const initKakao = () => {
        const jsKey = "883a114dde0f9d69da887c2f120f099f";
        if (window.Kakao) {
            const Kakao = window.Kakao;
            if (Kakao && !Kakao.isInitialized()) {
                Kakao.init(jsKey);
            }
        }
    };

    useEffect(() => {
        initKakao();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        window.location.href = "/";
    };

    const kakaoLogin = () => {
        window.Kakao.Auth.authorize({
          redirectUri: 'http://localhost:5173/auth/callback', // 카카오 개발자 콘솔에 등록된 Redirect URI
        });
      };

    return <AuthContext.Provider value={{ isLoggedIn, login, logout, kakaoLogin }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
