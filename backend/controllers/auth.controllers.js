export const login = (req, res) => {
    console.log("Login Controller");
};

export const signup = async (req, res) => {
    try {
        console.log("signup Controller");
        const { fullName, userName, password, confirmPassword, gender } = req.body;
    } catch (error) {

    }
};

export const logout = (req, res) => {
    console.log("LogOut Controller");
};