import LenguaTurno from '../../Models/LenguaTurno/index.js'

export const postLenguaTurno = async (req, res) => {
    let turno = req.body;
    try {
        const lenguaTurno = await LenguaTurno.create(turno);
        res.status(201).json(lenguaTurno)
    }
    catch (error) {
        res.status(400).json({ mes:"1", message: error.message })
    }
}

export const getAllLenguaTurno = async (req, res) => {
    try {
        const lenguaTurno = await LenguaTurno.find();
        res.status(200).json(lenguaTurno);
    } catch (error) {
        res.status(400).json({  mes:"2",message: error.message });
    }
};

export const getOneLenguaTurno = async (req, res) => {
    const turno = req.params;
    try {
        const lenguaTurno = await LenguaTurno.findById(turno.id);
        res.status(200).json(lenguaTurno);
    }
    catch (error) {
        res.status(400).json({ mes:"2b", message: error.message });
    }
}

export const patchLenguaTurno = async (req, res) => {
    try {
        const lenguaTurno = await LenguaTurno.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {
                new: true,
            }
        );
        res.status(200).json(lenguaTurno);
    } catch (error) {
        res.status(400).json({ mes:"3",message: error.message });
    }
};


export const deleteLenguaTurno = async (req, res) => {
    try {
        const lenguaTurno = await LenguaTurno.findByIdAndDelete(req.params.id);
        res.status(200).json(lenguaTurno);
    } catch (error) {
        res.status(400).json({ mes:"4", message: error.message });
    }
};
