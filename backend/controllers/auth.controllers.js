import User from "../models/user.model.js";

//bcrypt for salting
import bcrypt from 'bcryptjs';
import generateJWTandSetCookies from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        // console.log("signup Controller");
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" });
        }

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({ error: "User Already exist" });
        }

        // HASH password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            //instead of fullName: fullName;
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? maleProfilePic : femaleProfilePic
        });

        if (newUser) {

            // jwt token and set it to cookie
            generateJWTandSetCookies(newUser._id, res);

            await newUser.save();

            return res.status(201).json({
                _id: newUser.id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            });
        }
        else {
            return res.status(400).json({ error: "Invalid User Data !!" });
        }

    } catch (error) {
        console.log(`Error is SignUp controller : ${error.message}`);
        return res.status(400).json({ error: error.message });
    }
};

export const login = (req, res) => {
    console.log("Login Controller");
};


export const logout = (req, res) => {
    console.log("LogOut Controller");
};