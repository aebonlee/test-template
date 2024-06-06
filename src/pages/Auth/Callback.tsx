// 빈 tsx

import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../States/AuthContext";

export default function KakaoCallback() {
    const navigate = useNavigate();
    const { login } = useAuth();
    useEffect(() => {
        async function fetchKakao() {
            const params = new URLSearchParams(window.location.search);
            const code = params.get("code");
            const grantType = "authorization_code";
            const clientId = "883a114dde0f9d69da887c2f120f099f";
            const redirectUri = "http://localhost:5173/auth/callback";

            if (code) {
                const response = await fetch("https://kauth.kakao.com/oauth/token", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    },
                    body: `grant_type=${grantType}&client_id=${clientId}&redirect_uri=${redirectUri}&code=${code}`,
                });
                const tokenData = await response.json();
                const accessToken = tokenData.access_token;
                const refreshToken = tokenData.refresh_token;

                const kakaoUser = await fetch("https://kapi.kakao.com/v2/user/me", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    },
                });
                const userData = await kakaoUser.json();

                const apiResponse = await fetch("http://localhost:3000/auth-kakao/kakao", {
                    // 백엔드 엔드포인트
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        token: accessToken,
                        kakaoId: userData.id.toString(),
                        name: userData.properties.nickname,
                    }),
                });
                const apiData = await apiResponse.json();
                //{ success: true, token: jwt.access_token }
                // 로그인 성공시
                if (apiData.success) {
                    login(apiData.token);
                    navigate("/");
                }
            }
        }
        fetchKakao();
    }, []);
    return <></>;
}
