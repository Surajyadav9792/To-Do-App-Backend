const jwt = require("jsonwebtoken");
const userMiddleware = (req, res, next) => {
    try {

        const { token } = req.cookies;

        if (!token) {
            throw new Error("Token not found");
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);

        console.log("decoded:", decoded);

        req.user = decoded;

        next();

    } catch (err) {

        console.log("ERROR:", err);   

        res.status(401).json({
            message: err.message
        });
    }
};

module.exports = userMiddleware;