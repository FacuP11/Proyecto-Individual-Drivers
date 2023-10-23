const {Router} = require('express')
const postRouter = Router()
const postHandlerDriver = require('../handlers/postHandlerDriver')

postRouter.post('/', postHandlerDriver)


module.exports = postRouter;