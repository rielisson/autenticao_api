import jwt from 'jsonwebtoken';

export default function verifiesAccess(req , res , next)  {
    const token = req.cookies.token;

    if(!token) { // verifica se tem token.
        return res.status(401).json({message: "Denied access, missing token."});
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // O server tenta abrir o token.

        req.userId = decoded.id; // se tiver o token correto guardamos o id do usuario.

        next(); // chamar a proxima função.
    } catch (err) {
        return res.status(404).json({message: "Invalid or expired token."});
    }
}
