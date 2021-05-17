import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
const fs = require('fs');

const json_user = fs.readFileSync('datauser.json');
let datuser = JSON.parse(json_user);

export async function login(req: Request, res: Response) {
    const resp: boolean = false;
    const data = req.body.params;
    const user = data.user;
    const password = data.password;
    const secret_key = "d0roWSf8eYn6OqqcdIBqNVOV1Z6QC2W1GLMu8KsfQcyHpoa5VyFZX6hovXPVRlwU";
    if (datuser.user == user && datuser.pass == password) {
        const token: string = jwt.sign({id: datuser.id}, secret_key)
        const response = {
            token: token,
            id: datuser.id,
            name: datuser.name,
            lastname: datuser.lastname,
        }
        return res.status(200).json(response);
    } else {
        return res.status(200).json(resp);
    }
    
}