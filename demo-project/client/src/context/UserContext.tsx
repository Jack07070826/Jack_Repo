import { createContext } from "react";
import User from "../models/User";

const UserContext = createContext<User>({ name: "", job: "" });

export default UserContext;
