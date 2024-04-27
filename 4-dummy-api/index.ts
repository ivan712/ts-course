import fetch from 'node-fetch';
import { IUser } from './user.interface';

const URL = 'https://dummyjson.com/users';

const getUsers = async (): Promise<IUser[]> => {
    const response = await fetch(URL);
    const data = await response.json() as { users: IUser[] };
    return data.users;
}

getUsers().then(res => console.log(res));