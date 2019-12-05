import { Request, Response } from "express";
import User from './../users';

export let allUsers = (req: Request, res: Response) => {
    User.find(async (err: any, users: any) => {
        if (err) {
            await res.send(err);
        } else {
            await res.send(users)
        }
    })
};

export let getUser = (req: Request, res: Response) => {
    User.findById({ _id: req.params.id }, async (err: any, user: any) => {
        if (err) {
            await res.send(err);
        } else {
            await res.send(user)
        }
    })
};

export let deleteUser = (req: Request, res: Response) => {
    User.deleteOne({ _id: req.params.id }, async (err: any) => {
        if (err) {
            await res.send(err);
        } else {
            await res.send("Successfully Deleted the User")
        }
    })
};

export let updateUser = (req: Request, res: Response) => {
    User.findByIdAndUpdate(req.params.id, req.body, async (err: any, user: any) => {
        if (err) {
            await res.send(err);
        } else {
            await res.send("Successfully Updated the User")
        }
    })
};

export let addUser = (req: Request, res: Response) => {
    let user = new User(req.body);
    user.save(async (err: any) => {
        if (err) {
            await res.send(err);
        } else {
            await res.send(user)
        }
    })
};