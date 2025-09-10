import { fetchCurrentUser, loginUser, registerUser } from '@/services/authService';
import { setAuthToken } from '@/utils/api';
import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true);

    const login = async(email, password) => {
        const {token, user} = await loginUser(email, password);
        await SecureStore.setItemAsync("token", token);
        setAuthToken(token);
        setUser(user);
    };

    const register = async(name, email, password ) => {
        const {token,user} = await registerUser(name, email, password);
        await SecureStore.setItemAsync("token", token);
        setAuthToken(token);
        setUser(user);
    };

    const logout = async () => {
        await SecureStore.deleteItemAsync("token");
        setAuthToken(null);
        setUser(null);

    }
   

    const loadUser = async () => {
        const token = await SecureStore.getItemAsync("token");
        if(!token) return setAuthLoading(false);


        try {
            setAuthToken(token);
            const {user} = await fetchCurrentUser();
            setUser(user);
        } catch (error) {
            console.error("auth login failed:", error);
            await SecureStore.deleteItemAsync("token");            
        }

        finally{
            setAuthLoading(false)
        }
    };

    useEffect( () => {
        loadUser();

    }, []);

    return(
        <AuthContext.Provider value={{user, login, register, logout, authLoading}} >
            {children}
        </AuthContext.Provider>
    )


};

export const useAuth = () => useContext(AuthContext)