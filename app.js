import { UserModel } from "./model/userModel.js";
import { UserRepository } from "./repository/userRepo.js";
import { UserService } from "./service/userService.js";

const userRepo = new UserRepository();
const userService = new UserService(userRepo)

const userModel = new UserModel("nom", "pp" , "0987654321"); 

console.log(userRepo.create(userModel))