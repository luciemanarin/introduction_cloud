const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'DATABASE_NAME', // Database name
  'DB_USER', // Users
  'DB_PASSWORD', // Password
  {
    host: 'DB_HOST', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
