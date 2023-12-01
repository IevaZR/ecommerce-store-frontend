
import { useState, useEffect } from "react";
import axios from "axios";

const useLoginAuth = (token) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL
    const checkLoginAuth = async () => {
      try {
        await axios.post(
          `${backendUrl}/user/check-auth`,
          {
            session_token: token,
            userName: localStorage.getItem("email"),
          }
        );
        setIsLoggedIn(true);
        setLoading(false);
      } catch (error) {
        
        setIsLoggedIn(false);
        setLoading(false);
      }
    };

    checkLoginAuth();
  }, []);

  return { isLoggedIn, loading };
};

export default useLoginAuth;