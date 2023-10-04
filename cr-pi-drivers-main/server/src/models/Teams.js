const {Datatype} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Team', {
        id: {
            type: Datatype.UUID,
            allowNull: false
        },
        name: {
            type: Datatype.STRING,
            allowNull: false
        }
    })
}