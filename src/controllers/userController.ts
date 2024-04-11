import {Request, Response } from 'express';
import { UserModel } from '../models/userModel';
import bcrypt from 'bcrypt';

export const createUser = async (req:Request, res:Response): Promise<void> => {
    try {
        const existingUser = await UserModel.findOne({
            $or: [{ name: req.body.name }, { email: req.body.email}]
        });

        if (existingUser) {
            return res.redirect(
                "/signup?message=User%20with%20the%20same%20email%20or%20name%20already%20exists"
              );
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        await newUser.save()

        console.log(`User ${newUser.name} saved to the User collection`);

        res
            .status(200)
            .json({ message: "User created successfully", user: newUser});
    } catch (error) {
        console.error(`Error saving user:`, error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}