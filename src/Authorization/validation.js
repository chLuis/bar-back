import jwt from 'jsonwebtoken';

export const validationToken = (req, res, next) => {
    //console.log("ENTRANDO")
    const token = req.headers.authorization?.split(" ")[1];
    const tokenSinComillas = token.replace(/"/g, '');
    //console.log(tokenSinComillas)
    jwt.verify(tokenSinComillas, process.env.TOKEN_SECRET, (err, decoded) => {
        token && !err 
            ? next() 
            : res.status(401).json({ message: err });
    });
}