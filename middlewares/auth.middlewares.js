const jwt = require('jsonwebtoken')

function verifyToken (req, res, next){
    // Get auth header value
    const token = req.headers["authorization"]

    try {
        console.log(`token`, token);
        // Check if token is provided
        if(!token) throw `No token provided !`

        // Verify & decode token
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)

        // Set user in the request object
        req.user = decodedToken
    } catch (error) {
        return res.status(401).json({error: error})
        
    }

    // If all OK - proceed to next middleware (if any)
    return next()
}

function checkRole(roles){
    return (req, res, next) =>{

        if (!roles.includes(req.user.role)){
            return res.status(401).json({error: "Unauthorized"})
        }

        return next()
    }
}

module.exports = {
    verifyToken,
    checkRole
}