import './db.js'
import connection from './db.js';

class UserModel {
    async createUser(data) {
        try {
            let createUser = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
            const [result] = await connection.execute(createUser, [
                data.email,
                data.senha
            ])
            return result;
        } catch (err) {
            return console.error(err);
        }
        
    }
}

export default new UserModel();