import LenguaUser from '../../Models/LenguaUser/index.js';
import { hashSync, compareSync, genSaltSync  } from 'bcrypt';
import jwt from 'jsonwebtoken';

export const postLenguaUser = async (req, res) => {
    //console.log("postLenguaUser")
    //console.log(req.body)
    const userExist = await LenguaUser.findOne({name: req.body.name})
    if(userExist){
        return res.status(400).json({ message: "El usuario ya existe" })
    }
    try {
        const salt = genSaltSync(12)
        
        const passwordHashed = hashSync(req.body.password, salt)
        const user = {
            name: req.body.name,
            password: passwordHashed,
        }
        const newUser = await LenguaUser.create(user);
        res.status(201).json(`Bienvenido: ${newUser.name}`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getLenguaUser = async (req, res) => {
    //console.log("getLenguaUser")
    //console.log(req.body)
    const { name, password } = req.body;
    try {
        //console.log("es")
        const user = await LenguaUser.findOne({name});
        const passValidation = compareSync(password, user.password);
        //console.log(passValidation)
        if(passValidation){
            const jwToken = jwt.sign({name: user.name, admin: user.admin, state: user.state},
                process.env.TOKEN_SECRET,
                {expiresIn: '7d'});
            const userLog = {user: user.name, admin: user.admin, state: user.state, token: jwToken}
            //console.log(userLog)
            return res.status(200).json(userLog)
        }
        console.log("BADDDI")
        return res.status(401).json(`Usuario o contraseña incorrectos`)
    }
    catch (error) {
        console.log("BAD")
        return res.status(401).json(`Usuario o contraseña incorrectos`)
    }
}