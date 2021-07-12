module.exports = {
  database: {
    host: process.env.HOST || 'localhost',
    name:  process.env.DATABASE_NAME || 'unleash',
    user: process.env.DATABASE_USER || 'unleash_user',
    password: process.env.DATABASE_PASSWORD ||'postgres',
  },

}
