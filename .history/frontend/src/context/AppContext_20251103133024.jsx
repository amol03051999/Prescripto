import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(null);

  const getDoctorsData = async () => {
    if (!backendUrl) {
      console.error("VITE_BACKEND_URL is not defined");
      return;
    }
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      console.log("getDoctorsData response", data);
      if (data.success) setDoctors(data.doctors);
      else toast.error(data.message);
    } catch (error) {
      console.error("Error while fetching doctors data", error);
      toast.error(error.message || "Failed to fetch doctors");
    }
  };

  const loadUserProfileData = async () => {
    if (!backendUrl) {
      console.error("VITE_BACKEND_URL is not defined");
      return;
    }
    if (!token) {
      console.log("No token, skipping loadUserProfileData");
      return;
    }
    try {
      const headers = { token };
      // also include Authorization in case backend expects it
      headers.authorization = `Bearer ${token}`;
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers,
      });
      console.log("loadUserProfileData response", data);
      if (data.success) setUserData(data.userData);
      else {
        toast.error(data.message);
        // clear invalid token
        if (
          data.message?.toLowerCase().includes("invalid") ||
          data.message?.toLowerCase().includes("expired")
        ) {
          setToken(null);
          localStorage.removeItem("token");
        }
      }
    } catch (error) {
      console.error("Error while loading user profile data", error);
      toast.error(error.message || "Failed to load profile");
    }
  };

  const value = {
    doctors,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    getDoctorsData, // expose so consumers can refresh
  };

  useEffect(() => {
    getDoctorsData();
  }, [backendUrl]);

  useEffect(() => {
    if (token) loadUserProfileData();
    else setUserData(null);
  }, [token, backendUrl]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
