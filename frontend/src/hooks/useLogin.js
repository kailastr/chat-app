import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {

    const { setAuthUser } = useAuthContext();

    const [loading, setLoading] = useState(false);

    const login = async (userName, password) => {

        const success = verifyInput(userName, password);

        if (!success) return

        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password })
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { login, loading };
}

export default useLogin

function verifyInput(userName, password) {
    if (!userName || !password) {
        toast.error("Please fill out all the fields");
        return false;
    }

    if (password.length < 6) {
        toast.error("The password must be at-least 6 characters");
        return false;
    }

    return true;
}