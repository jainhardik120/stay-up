import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "./Constants";
import axios from "axios";

interface User {
  email: string;
  name: string;
  teams: string[];
}

interface AuthValues {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name : string) => Promise<void>;
  user: User | null;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<AuthValues | undefined>(undefined);
export const Auth = ({ children }: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const refreshUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/user`);
      setUser(response.data);
    } catch (error) {
      console.error("Failed to refresh user:", error);
      setUser(null);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
      setUser(response.data.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const register = async (email: string, password: string, name : string) => {
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, { email, password, name });
      setUser(response.data.user);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`, {});
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{
      login,
      register,
      user,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
}