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