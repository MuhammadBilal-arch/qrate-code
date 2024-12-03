'use server';

import User from '@/utils/models/user.model';
import { connectMongo } from '../mongodb';

export async function createUser(user: any){
    try {
        await connectMongo();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error);
    }
}