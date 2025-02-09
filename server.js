const express = require('express')
const dotenv = require('dotenv')
const rateLimiter = require('./middleware/rateLimit')
const authMiddleware = require('./middleware/auth')
const itemsRouter = require('./routes/items')
const loginRouter = require('./routes/auth')

dotenv.config()
const app = express()
app.use(express.json())

app.use('/api/items', rateLimiter, authMiddleware, itemsRouter)
app.use('/api/auth', loginRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
