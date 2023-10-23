const {Router} = require('express')
const driverRouter = Router()
const getHandlerDrivers = require('../handlers/getHandlerDrivers');
const  getHandlerId = require('../handlers/getHandlerId');
const getHandlerName = require('../handlers/getHandlerName');
const getHandlerTeams = require('../handlers/getHandlerTeams');
const postHandlerDriver = require('../handlers/postHandlerDriver')

driverRouter.get('/', getHandlerDrivers)
driverRouter.get('/:idDriver', getHandlerId)
driverRouter.get(`/name?="..."`, getHandlerName)
driverRouter.get('/teams', getHandlerTeams)
driverRouter.post('/', postHandlerDriver)

module.exports = driverRouter;