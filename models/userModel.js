import db from "../knex.js";

// Fetch all users
export const getAllUsers = async () => {
    return await db("users").select("*");
};

// Fetch a single user by ID
export const getUserById = async (id) => {
    return await db("users").where({ id }).first();
};

// Create a new user
export const createUser = async (name, email) => {
    return await db("users").insert({ name, email }).returning("*");
};

// Check if an email already exists
export const isEmailTaken = async (email) => {
    const user = await db("users").where({ email }).first();
    return !!user;
};
