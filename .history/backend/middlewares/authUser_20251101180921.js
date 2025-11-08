import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Not Authorized. Please login again.'
            })
        }

        // Initialize req.body if it doesn't exist
        if (!req.body) {
            req.body = {}
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = decodedToken.id
        next()

    } catch (error) {
        console.error('Auth middleware error:', error)
        return res.status(401).json({
            success: false,
            message: 'Invalid token. Please login again.'
        })
    }
}

export default authUser