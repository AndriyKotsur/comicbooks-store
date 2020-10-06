require('dotenv').config();

module.exports = {
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_URI: `${process.env.DATABASE_URL}${process.env.DATABASE_NAME}`,
    PORT: process.env.PORT,
    TOKEN_KEY: process.env.TOKEN_KEY,
    TOKEN_EXP: process.env.TOKEN_EXP
};