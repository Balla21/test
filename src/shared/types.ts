import React from "react";

export interface User {
    firstname: string,
    lastname: string,
    email: string,
    avatar: string,
    id: number
}

export type UserList = User[];

export type Action = {type: "edit", payload: User} 
    | { type: "add", payload: Omit<User, "id"> } 
    | { type: "remove", payload: User }

export interface IDataContext {
    userList: UserList
    dispatch: React.Dispatch<Action>
}