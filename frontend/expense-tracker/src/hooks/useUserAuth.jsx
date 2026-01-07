import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";

export const useUserAuth = () => {
  const { user, updateUser, clearUser, setLoading } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }
    let isMounted = true;
    const fetchUserInfo = async () => {
      try {
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
        if (isMounted && response.data) {
          updateUser(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch user info", error);
        if (isMounted) {
          clearUser();
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchUserInfo();
    return () => {
      isMounted = false;
    };
  }, []);
};
