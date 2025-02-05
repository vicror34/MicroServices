import { getAllUsers, createUser, isEmailTaken } from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addUser = async (req, res) => {
    const { name, email } = req.body;

    try {
        if (await isEmailTaken(email)) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = await createUser(name, email);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
