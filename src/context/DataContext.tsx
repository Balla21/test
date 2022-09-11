import { IDataContext } from "../shared/types";
import React from "react";

// creation of a data context with an empty array
export const DataContext = React.createContext<IDataContext>({
    userList:[],
    dispatch: () => {}
});