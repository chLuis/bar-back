import User from '../../Models/User/index.js'

export const postUSer = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(`Bienvenido: ${user.name}`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    //console.log("AASDASD")
    //console.log(req)
    //console.log(req)
    const { name, password } = req.query.name;
    //console.log(name, password)
    try {
        const user = await User.findOne({name, password});
        //console.log(user)
        const userLog = {user: user.name, admin: user.admin}
        //console.log(userLog)
        res.status(200).json(userLog)
    }
    catch (error) {
        res.status(400).json( `Usuario o contraseña incorrectos`)
    }
}