import { user } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jsonSecret from "../config/jsonSecret.js";


const { compare } = bcrypt;

class AuthService {
    async login(dto){
        try {
            const user = await user.findOne({
                email: dto.email,

            }

            ).select("id email password");

            if(!user){
                throw new Error("Usuário não cadastrado.")

            }

            const passwordsMatch = await compare(dto.password, user.password);

            if (!passwordsMatch) {
                throw new Error("Usuário ou Senha incorreta.")
            }

            const accessToker = jwt.sign({
                    id: user.id,
                    email: user.email,

            },
        
            jsonSecret.secret,
            {
                expiresIn: 86400,
            }
        );
        } catch (error) {
            
        }
    }
}

export default new AuthService;