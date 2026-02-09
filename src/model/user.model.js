import './db.js'
import connection from './db.js';

class UserModel {
    async createUser(data) {
        try {
            let createUser = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
            const [result] = await connection.execute(createUser, [ // execute usar para manipulação.
                data.email,
                data.senha
            ])
            return result;
        } catch (err) {
            return console.error(err);
        }
        
    }

    async findUserByEmail(email) {
        try {
            let testUser = "SELECT * FROM usuarios WHERE email = ?";
            const result = await connection.query(testUser, [email]); // Query para pegar informações.
            return result[0];
        } catch (err) {
            return err.message;
        }
    }
}

export default new UserModel();