import jwt from 'jsonwebtoken'

const generateJWTandSetCookies = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //Max age of the cookie (15 days to be multiplied by hrs*mins*sec*miliSec)
        httpOnly: true, //to prevent XSS attacks
        sameSite: "strict", //to prevent CSRF attacks
        secure: process.env.NODE_ENV !== "development"
    })
};

export default generateJWTandSetCookies;