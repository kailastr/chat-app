import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/logout', {
                method: "POST",
                headers: { "Content-type": "application/json" }
            });
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            //remove item from the localstorage
            localStorage.removeItem("chat-user");

            //update context variable
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout };
}

export default useLogout