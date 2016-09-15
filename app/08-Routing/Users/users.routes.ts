import {Users} from "./Users";
import {User} from "./User/User";

export const usersRoutes = [
    { path : '' , component : Users , children:[
        { path : ''        , component : User  },
        { path : ':first' , component : User  }
    ]},

];