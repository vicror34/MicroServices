import dotenv from "dotenv";
dotenv.config();

export default {
    development: {
        client: "pg",
        connection: {
            host: "localhost",
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
        },
    },
};
