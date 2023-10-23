const { Router } = require("express");
const mainRouter = Router();
const postRouter = require('./postRouter')
const driverRouter = require('./driverRouter')



mainRouter.use('/drivers', driverRouter);
mainRouter.use('/post', postRouter)



module.exports = mainRouter;
