import {faker} from "@faker-js/faker";
import {IDataContext, User, UserList} from "../shared/types";
import React ,{PropsWithChildren, useReducer} from "react";
import { DataContext } from "../context/DataContext";


export type Action = {type: "edit", payload: User} 
    | { type: "add",payload: Omit<User, "id"> } 
    | { type: "remove",payload: User }

const items: UserList = [];

for(let i = 0; i < 100; i++){
    items.push({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        id: i,
    })
}

// creation of a data context with an empty array
// const DataContext = React.createContext<IDataContext>({
//     userList:[],
//     dispatch: () => {}
// });

//Data provider component
const DataProvider : React.FC<PropsWithChildren> = (props) => {

    const {children} = props;
    
    const editUser = (user:User, users:UserList) => {
        //edit user 
        console.log("editing user");
        return users;
    }

    const addUser = (user:Omit<User, "id">, users:UserList) => {
        console.log("adding user");
        return users;
    }

    const removeUser = (user:User, users:UserList) => {
        console.log("removing users");
        return users;
    }

    const [state, dispatch] = useReducer( (state: UserList, action: Action): UserList => {
        switch (action.type) {
            case "add":
                //write code here
                return addUser(action.payload, state);
            break;
            case "edit":
                //write code here
                return editUser(action.payload, state);
            break;

            case "remove":
                //write code here
                 return editUser(action.payload, state);
            break;

            default:
                return state;
        }
    }, items);

    return (
        <DataContext.Provider value={{userList: items, dispatch}}>
            {children}
        </DataContext.Provider>
    );

}

export default DataProvider;